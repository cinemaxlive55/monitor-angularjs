import { Location } from '@angular/common';
import { TectonicComponent } from './tectonic.component';
import { TestBed } from '@angular/core/testing';

describe('TectonicComponent (class only)', () => {
  let comp: TectonicComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TectonicComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(TectonicComponent);
    location = TestBed.get(Location);
  });

  it('TectonicComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
