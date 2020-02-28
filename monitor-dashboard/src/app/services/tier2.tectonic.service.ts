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
export class Tier2TectonicService {
  constructor() {}


  getClusterStatus(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-CLUSTER-STATUS', function( data ) {
        observer.next(data.up);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getSchedulerNumber(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-SCHEDULER-NUMBER', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getCrushLoopingPods(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-CRUSHLOOPING-PODS', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getApiServers(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-API-SERVERS', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getControllerManagers(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-CONTROLLER-MANAGERS', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getAlertNum(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-ALERT-NUMBER', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getPodsPercentage(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-PODS-PERCENTAGE', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }

  getNodeNotReady(): Observable<string> {

    let observable = Observable.create(function subscribe(observer) {
      socket.on( 'TIER2-TECTONIC-NODE-NOT-READY', function( data ) {
        observer.next(data.num);
      });
      return () => {
        socket.disconnect();
      };
    });
    return observable;
  }


}
