import {COLORS} from '../constants/colors';
import { Tier2TectonicService } from './tier2.tectonic.service';
import { SocketIO, Server } from 'mock-socket';
import {URLS} from '../constants/urls';
import { async, inject, TestBed } from '@angular/core/testing';

describe('Tier2TectonicService', () => {
  let socket;

  // const mockServer = new Server(URLS.service);
  // mockServer.on('connection', server => {
  //   mockServer.broadcast( 'cassandra', {
  //     color: 'green'
  //   });
  //
  // });
  //
  // (window as any).io = SocketIO;
  //
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [Tier2TectonicService]
  //   });
  // });

  // it('getClusterStatus should return defalt value', async(inject([Tier2TectonicService], (service: Tier2TectonicService) => {
  //   service.getClusterStatus().subscribe(val => {
  //     expect(val).toBe(COLORS.GREEN);
  //   })
  // })));

});
