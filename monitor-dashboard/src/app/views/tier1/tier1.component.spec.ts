import {AuthService} from '../../auth.service';
import {UserRoleService} from '../../services/user-role.service';
import {User} from '../../services/user';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier1Component } from './tier1.component';

import { asyncData } from '../../testing/async-observable-helpers';
import { Component, OnInit, NgZone,NO_ERRORS_SCHEMA } from '@angular/core';
import { ColorBlockComponent} from '../../components/color-block/color-block.component';
import { COLORS} from '../../constants/colors';
import { Tier1Service} from '../../services/tier1.service';
//
let comp: Tier1Component;
let fixture: ComponentFixture<Tier1Component>;

describe('Tier1Component ', () => {
  let tier1ServiceSpy: any;
  let zoneSpy: any;
  let zone: NgZone;
  let color: string;

  beforeEach((done: DoneFn) => {
    color = COLORS.GREEN;
    tier1ServiceSpy = jasmine.createSpyObj('Tier1Service', ['getCassandraStatus' , 'getFunctionalHealthStatus', 'getInfrastructureStatus', 'getSupportApplicationsStatus', 'getOperationalStatusStatus', 'getTectonicStatus', 'getKafkaStatus', 'getFluentdStatus', 'getElasticStatus']);

    tier1ServiceSpy.getCassandraStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getFunctionalHealthStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getInfrastructureStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getSupportApplicationsStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getOperationalStatusStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getTectonicStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getKafkaStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getFluentdStatus.and.returnValue(asyncData(color));
    tier1ServiceSpy.getElasticStatus.and.returnValue(asyncData(color));

    zoneSpy = jasmine.createSpyObj('NgZone',['run']);
    zoneSpy.run.and.returnValue(null);

    comp = new Tier1Component(<any> tier1ServiceSpy, <any> zoneSpy);
    comp.ngOnInit();

    // login calls userRoleServiceSpy.getUser; wait for it to get the fake hero
    tier1ServiceSpy.getCassandraStatus.calls.first().returnValue.subscribe(done);
  });

  it('Tier1Component should create', () => {
    expect(comp).toBeTruthy();
  });

  it('the methods should be call', () => {
    expect(tier1ServiceSpy.getCassandraStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getCassandraStatus called');
    expect(tier1ServiceSpy.getFunctionalHealthStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getFunctionalHealthStatus called');
    expect(tier1ServiceSpy.getInfrastructureStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getInfrastructureStatus called');
    expect(tier1ServiceSpy.getSupportApplicationsStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getSupportApplicationsStatus called');
    expect(tier1ServiceSpy.getOperationalStatusStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getOperationalStatusStatus called');
    expect(tier1ServiceSpy.getTectonicStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getTectonicStatus called');
    expect(tier1ServiceSpy.getKafkaStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getKafkaStatus called');
    expect(tier1ServiceSpy.getFluentdStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getFluentdStatus called');
    expect(tier1ServiceSpy.getElasticStatus.calls.any()).toBe(true, 'tier1ServiceSpy.getElasticStatus called');
  });

});
