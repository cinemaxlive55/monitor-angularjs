import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 11, username: 'citizen1', password: 123, role: 'citizen'},
      {id: 12, username: 'citizen2', password: 123, role: 'citizen'},
      {id: 13, username: 'call1', password: 123, role: 'callCentre'},
      {id: 14, username: 'call2', password: 123, role: 'callCentre'},
      {id: 15, username: 'ops1', password: 123, role: 'operator'},
      {id: 16, username: 'ops2', password: 123, role: 'operator'},
    ];
    return {users};
  }
}
