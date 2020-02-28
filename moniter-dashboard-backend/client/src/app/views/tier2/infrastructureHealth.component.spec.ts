import { Location } from '@angular/common';
import { InfrastructureHealthComponent } from './infrastructureHealth.component';
import { TestBed } from '@angular/core/testing';

describe('InfrastructureHealthComponent (class only)', () => {
  let comp: InfrastructureHealthComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InfrastructureHealthComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(InfrastructureHealthComponent);
    location = TestBed.get(Location);
  });

  it('InfrastructureHealthComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
