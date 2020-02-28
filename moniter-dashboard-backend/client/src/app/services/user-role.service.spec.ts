import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../testing/async-observable-helpers';

import {User} from "./user";
import { UserRoleService } from './user-role.service';

describe ('UsersService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userRoleService: UserRoleService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userRoleService = new UserRoleService(<any> httpClientSpy);
  });

  it('should return expected Users (HttpClient called once)', () => {
    const expectedUsers: User[] =
      [
        {id: 11, username: 'citizen1', password: 123, role: 'citizen'},
        {id: 12, username: 'citizen2', password: 123, role: 'citizen'},
      ];

    httpClientSpy.get.and.returnValue(asyncData(expectedUsers));

    userRoleService.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers, 'expected users'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    userRoleService.getUsers().subscribe(
      users => expect(users).toBeUndefined(),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});

describe('UserRoleService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userRoleService: UserRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [ UserRoleService ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    userRoleService = TestBed.get(UserRoleService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// HeroService method tests begin ///
  describe('#getUsers', () => {
    let expectedUsers: User[];

    beforeEach(() => {
      userRoleService = TestBed.get(UserRoleService);
      expectedUsers = [
        {id: 11, username: 'citizen1', password: 123, role: 'citizen'},
        {id: 12, username: 'citizen2', password: 123, role: 'citizen'},
       ] as User[];
    });

    it('should return expected users (called once)', () => {
      userRoleService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'should return expected users'),
        fail
      );

      // HeroService should have made one request to GET users from expected URL
      const req = httpTestingController.expectOne(userRoleService.userRoleUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock users
      req.flush(expectedUsers);
    });

    it('should be OK returning no users', () => {
      userRoleService.getUsers().subscribe(
        users => expect(users.length).toEqual(0, 'should have empty users array'),
        fail
      );

      const req = httpTestingController.expectOne(userRoleService.userRoleUrl);
      req.flush([]); // Respond with no users
    });

    it('should return expected users (called multiple times)', () => {
      userRoleService.getUsers().subscribe();
      userRoleService.getUsers().subscribe();
      userRoleService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'should return expected users'),
        fail
      );

      const requests = httpTestingController.match(userRoleService.userRoleUrl);
      expect(requests.length).toEqual(3, 'calls to getUsers()');

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{id: 11, username: 'citizen1', password: 123, role: 'citizen'}]);
      requests[2].flush(expectedUsers);
    });
  });

  describe('#getUser', () => {
    it('should update a hero and return it', () => {

      const user: User = {id: 11, username: 'citizen1', password: 123, role: 'citizen'};

      userRoleService.getUser(user).subscribe(
        data => expect(data).toEqual(user, 'should return the user'),
        fail
      );

      // HeroService should have made one request to PUT hero
      const url = `${userRoleService.userRoleUrl}/?username=${user.username}&password=${user.password}`;
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: user });
      req.event(expectedResponse);
    });

  });

});
