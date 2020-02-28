import { Location } from '@angular/common';
import { FunctionalHealthComponent } from './functionalHealth.component';
import { TestBed } from '@angular/core/testing';

describe('FunctionalHealthComponent (class only)', () => {
  let comp: FunctionalHealthComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FunctionalHealthComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(FunctionalHealthComponent);
    location = TestBed.get(Location);
  });

  it('FunctionalHealthComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
