import {User} from "./user";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserRoleService {
  readonly userRoleUrl = 'api/users';

  constructor(
    private httpclient: HttpClient
  ) {}

  /** GET user by id. Will 404 if id not found */
  getUser(user: User): Observable<User> {
    const url = `${this.userRoleUrl}/?username=${user.username}&password=${user.password}`;
    return this.httpclient.get<User>(url).pipe(
      catchError(this.handleError<User>(`user name=${user.username}`))
    );
  }

  getUsers():  Observable<User[]> {
    return this.httpclient.get<User[]>(this.userRoleUrl).pipe(
      catchError(this.handleError<User>(`getUsers`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(error);
      // TODO: send the error to remote logging infrastructure
      console.error("error : "+error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
