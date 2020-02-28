import {User} from "./user";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {URLS} from '../constants/urls';

@Injectable()
export class UserRoleService {

  constructor(
    private httpclient: HttpClient
  ) {}

  /** GET user by id. Will 401 if id not found */
  getUser(user: User): Observable<JSON> {
    let requestURl = URLS.service+'/loginJwt';
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.post<JSON>(requestURl,user,httpOptions).pipe(
      catchError(this.handleError<JSON>(`user name=${user.username}`))
    );
  }
  /**get userrole by userName */
  getUserRoles(token:string): Observable< JSON > {
    let requestURl = URLS.service+'/getRoleJwt';
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    return this.httpclient.get<JSON>(requestURl,httpOptions).pipe(
      catchError(this.handleError<JSON>(`without User`))
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
