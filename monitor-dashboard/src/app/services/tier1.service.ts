import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {COLORS} from '../constants/colors';
import {URLS} from '../constants/urls';

declare var require: any;
const socket = require('socket.io-client')(URLS.service);

@Injectable()
export class Tier1Service {
  constructor() {}


  getCassandraStatus(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'cassandra', function( data ) {
        console.log("5555555555555"+data);
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
    // return Observable.of(COLORS.GREEN);
  }

  getFunctionalHealthStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'functionalHealth', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getInfrastructureStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'infrastructureHealth', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getSupportApplicationsStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'supportApplication', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getOperationalStatusStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'operational', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getTectonicStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'tectonic', function( data ) {
        console.log("111111111111111=color = "+data);
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getKafkaStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'kafka', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getFluentdStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'fluentd', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }
  getElasticStatus(): Observable<string> {
    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'elastic', function( data ) {
        observer.next(data.color);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

}
