import {User} from "./user";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
import {Observable} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PromethueusService {
  private promethueusProxyURL = 'api/v1';

  constructor(
    private httpclient: HttpClient,
    private http: Http
  ) {}


  getPromethusData_conter_status_200_health(): Promise<Jsonp>{
//     const url = `${this.promethueusProxyURL}/query?query=counter_status_200_health`;
     const url = `${this.promethueusProxyURL}/query?query=up`;
     return this.http.get(url).toPromise().then(
       res => res.json()
     ).catch(error => { catchError(this.handleError<Jsonp>(`getPromethusData`)); });
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
