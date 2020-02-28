import {COLORS} from '../constants/colors';
import { Tier1Service } from './tier1.service';
import { SocketIO, Server } from 'mock-socket';
import {URLS} from '../constants/urls';
import { async, inject, TestBed } from '@angular/core/testing';

describe('Tier1Service', () => {
  let socket;

  const mockServer = new Server(URLS.service);
  mockServer.on('connection', server => {
    mockServer.broadcast( 'cassandra', {
      color: 'green'
    });
    mockServer.broadcast( 'functionalHealth', {
      color: 'green'
    });
    mockServer.broadcast( 'infrastructureHealth', {
      color: 'green'
    });
    mockServer.broadcast( 'supportApplication', {
      color: 'green'
    });
    mockServer.broadcast( 'operational', {
      color: 'green'
    });
    mockServer.broadcast( 'tectonic', {
      color: 'green'
    });
    mockServer.broadcast( 'kafka', {
      color: 'green'
    });
    mockServer.broadcast( 'fluentd', {
      color: 'green'
    });
    mockServer.broadcast( 'elastic', {
      color: 'green'
    });
  });

  (window as any).io = SocketIO;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Tier1Service]
    });
  });

  it('getCassandraStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getCassandraStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getFunctionalHealthStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getFunctionalHealthStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getInfrastructureStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getInfrastructureStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getSupportApplicationsStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getSupportApplicationsStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getOperationalStatusStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getOperationalStatusStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getTectonicStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getTectonicStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getKafkaStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getKafkaStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getFluentdStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getFluentdStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));

  it('getElasticStatus should return defalt value', async(inject([Tier1Service], (service: Tier1Service) => {
    service.getElasticStatus().subscribe(val => {
      expect(val).toBe(COLORS.GREEN);
    })
  })));
  
  afterEach(() => {
    mockServer.stop();
  });

});
