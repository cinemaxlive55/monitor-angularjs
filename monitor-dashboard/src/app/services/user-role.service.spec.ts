import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../testing/async-observable-helpers';

import {User} from "./user";
import { UserRoleService } from './user-role.service';
import {URLS} from '../constants/urls';

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
  describe('#getUserRoles', () => {
    let expectedJson: any;
    const token = 'token';

    beforeEach(() => {
      userRoleService = TestBed.get(UserRoleService);
      expectedJson = { success: true, data: { id: 16, username: 'ops2',  role: 'operator' }};
    });

    it('should return expected users (called once)', () => {
      userRoleService.getUserRoles(token).subscribe(
        users => expect(users).toEqual(expectedJson, 'should return expected users'),
        fail
      );

      const requestURl = `${URLS.service}/getRoleJwt`;
     // UserRoleService should have made one request to GET users from expected URL
      const req = httpTestingController.expectOne(requestURl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock users
      req.flush(expectedJson);
    });

    it('should be OK returning no users', () => {
      userRoleService.getUserRoles(token).subscribe(
        users => expect(users).toEqual([], 'should have empty users array'),
        fail
      );
      const requestURl = `${URLS.service}/getRoleJwt`;
      const req = httpTestingController.expectOne(requestURl);
      req.flush([]); // Respond with no users
    });

    it('should return 404 error', () => {
      const msg = 'Deliberate 404';
      userRoleService.getUserRoles(token).subscribe(
        users => expect(users).toBeUndefined(),
        fail
      );
      const requestURl = `${URLS.service}/getRoleJwt`;
      const req = httpTestingController.expectOne(requestURl);

      // respond with a 404 and the error message in the body
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });
  });

  describe('#getUser', () => {
    it('should get user and return it', () => {
      const user: User = {id: 11, username: 'citizen1', password: 123, role: 'citizen'};
      const expectedToken = { user: 'citizen1', token: 'token'};
      userRoleService.getUser(user).subscribe(
        data => expect(data).toEqual(expectedToken),
        fail
      );

      // HeroService should have made one request to PUT hero
      const url = `${URLS.service}/loginJwt`;
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('POST');

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: expectedToken });
      req.event(expectedResponse);
    });

    it('should return 404 error', () => {
      const msg = 'Deliberate 404';
      const user: User = {id: 11, username: 'citizen1', password: 123, role: 'citizen'};
      userRoleService.getUser(user).subscribe(
        users => expect(users).toBeUndefined(),
        fail
      );
      const url = `${URLS.service}/loginJwt`;
      const req = httpTestingController.expectOne(url);

      // respond with a 404 and the error message in the body
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

  });

});
