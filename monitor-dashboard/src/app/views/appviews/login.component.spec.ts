import {AuthService} from '../../auth.service';
import {UserRoleService} from '../../services/user-role.service';
import {User} from '../../services/user';

import { LoginComponent } from './login.component';

import { asyncData } from '../../testing/async-observable-helpers';

describe('LoginComponent (with spies)', () => {
  let authServiceSpy: any;
  let comp: LoginComponent;
  let inputUser: any;
  let expectedToken: any;
  let expectedJson: any;
  let expectedLogin: boolean;
  let userRoleServiceSpy: any;
  let router: any;

  beforeEach((done: DoneFn) => {
    expectedToken = { user: 'test', token: 'token'};
    inputUser = {id: 16, username: 'ops2', password: 123, role: 'operator'};
    expectedLogin = true;
    // expectedJson = '{"success":true,"data":{"id":16,"username":"ops2","role":"operator"}}';
    expectedJson = { success: true, data: { id: 16, username: 'ops2',  role: 'operator' }};
    router = jasmine.createSpyObj('router', ['navigate']);
    userRoleServiceSpy = jasmine.createSpyObj('UserRoleService', ['getUser' , 'getUserRoles']);
    userRoleServiceSpy.getUser.and.returnValue(asyncData(expectedToken));
    userRoleServiceSpy.getUserRoles.and.returnValue(asyncData(expectedJson));

    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    authServiceSpy.login.and.returnValue(asyncData(expectedLogin));
    authServiceSpy.isLoggedIn = true;

    comp = new LoginComponent(<any> authServiceSpy, router, <any> userRoleServiceSpy);
    comp.ngOnInit();
    comp.user = inputUser;
    comp.login();

    // login calls userRoleServiceSpy.getUser; wait for it to get the fake hero
    userRoleServiceSpy.getUser.calls.first().returnValue.subscribe(done);
  });

  it('should getUser', () => {
    expect(userRoleServiceSpy.getUser.calls.any()).toBe(true, 'UserRoleServiceSpy.getUser called');
    expect(userRoleServiceSpy.getUserRoles.calls.any()).toBe(true, 'UserRoleServiceSpy.getUserRoles called');
  });

  it('should expose the hero retrieved from the service', () => {
    expect(comp.user).toBe(inputUser);
  });

});
