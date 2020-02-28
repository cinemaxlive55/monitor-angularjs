import {AuthService} from '../../auth.service';
import {UserRoleService} from '../../services/user-role.service';
import {User} from '../../services/user';

import { LoginComponent } from './login.component';

import { asyncData } from '../../testing/async-observable-helpers';

describe('LoginComponent (with spies)', () => {
  let authServiceSpy: any;
  let comp: LoginComponent;
  let expectedUser: User;
  let expectedLogin: boolean;
  let userRoleServiceSpy: any;
  let router: any;

  beforeEach((done: DoneFn) => {
    expectedUser = {id: 15, username: 'ops1', password: 123, role: 'operator'};
    expectedLogin = true;
    router = jasmine.createSpyObj('router', ['navigate']);

    userRoleServiceSpy = jasmine.createSpyObj('UserRoleService', ['getUser']);
    userRoleServiceSpy.getUser.and.returnValue(asyncData([expectedUser]));

    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    authServiceSpy.login.and.returnValue(asyncData(expectedLogin));
    authServiceSpy.isLoggedIn = true;

    comp = new LoginComponent(<any> authServiceSpy, router, <any> userRoleServiceSpy);
    comp.ngOnInit();
    comp.user = expectedUser;
    comp.login();

    // login calls userRoleServiceSpy.getUser; wait for it to get the fake hero
    userRoleServiceSpy.getUser.calls.first().returnValue.subscribe(done);

  });

  it('should getUser', () => {
    expect(userRoleServiceSpy.getUser.calls.any()).toBe(true, 'UserRoleServiceSpy.getUser called');
    expect(authServiceSpy.login.calls.any()).toBe(true, 'AuthServiceSpy.login called');
  });

  it('should expose the hero retrieved from the service', () => {
    expect(comp.user).toBe(expectedUser);
  });

});
