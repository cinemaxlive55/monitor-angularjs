import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {COLORS} from '../constants/colors';
declare var require: any;
const socket = require('socket.io-client')('http://localhost:3000');

@Injectable()
export class Tier1Service {
  constructor() {}


  getCassandraStatus(): Observable<string> {
    let observable = new Observable(observer => {
      socket.on( 'Cassandra', function( data ) {
        console.log(111111111);
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  // compute result
  //   return Observable.of(COLORS.GREEN);
  }

  getFunctionalHealthStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getInfrastructureStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getSupportApplicationsStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getOperationalStatusStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getTectonicStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getKafkaStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

  getFluentdStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }
  getElasticStatus(): Observable<string> {
    // compute result
    return Observable.of(COLORS.GREEN);
  }

}
