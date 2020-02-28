import {COLORS} from '../constants/colors';
import { Tier1Service } from './tier1.service';
import {of} from 'rxjs/observable/of';
import { asyncData} from '../testing/async-observable-helpers';

describe('Tier1Service', () => {
  let tier1Service: Tier1Service;

  beforeEach(() => { tier1Service = new Tier1Service(); });

  it('Tier1Service should create', () => {
    expect(tier1Service).toBeTruthy();
  });

  it('getCassandraStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getCassandraStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getFunctionalHealthStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getFunctionalHealthStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getInfrastructureStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getInfrastructureStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getSupportApplicationsStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getSupportApplicationsStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getOperationalStatusStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getOperationalStatusStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getTectonicStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getTectonicStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getKafkaStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getKafkaStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getFluentdStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getFluentdStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });

  it('getElasticStatus should return defalt value', (done: DoneFn) => {
    tier1Service.getElasticStatus().subscribe(data => {
      expect(data).toBe(COLORS.GREEN);
      done();
    });
  });
});
