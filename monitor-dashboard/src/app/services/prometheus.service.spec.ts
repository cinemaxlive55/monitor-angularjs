import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { asyncData, asyncError} from '../testing/async-observable-helpers';
import { PromethueusService } from './prometheus.service';
import { Http, Jsonp } from "@angular/http";

describe ('PromethueusService (with spies)', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let httpSpy: { get: jasmine.Spy };
  let promethueusService: PromethueusService;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpSpy = jasmine.createSpyObj('Http', ['get']);
    promethueusService = new PromethueusService(<any> httpClientSpy, <any> httpSpy);
  });

  it('should return expected Data (Http called once)', () => {
    httpSpy.get.and.returnValue(asyncData(<any> Jsonp));
    promethueusService.getPromethusData_conter_status_200_health();
    expect(httpSpy.get.calls.count()).toBe(1, 'one call');

  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpSpy.get.and.returnValue(asyncError(errorResponse));

    promethueusService.getPromethusData_conter_status_200_health();

    expect(httpSpy.get.calls.count()).toBe(1, 'one call');
  });
});
