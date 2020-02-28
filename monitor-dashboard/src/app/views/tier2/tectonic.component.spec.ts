import { Location } from '@angular/common';
import { TectonicComponent } from './tectonic.component';
import { TestBed } from '@angular/core/testing';
import {Tier2TectonicService} from '../../services/tier2.tectonic.service';
import {NgZone} from '@angular/core';

describe('TectonicComponent (class only)', () => {
  let comp: TectonicComponent;
  let location: Location;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TectonicComponent,
        { provide: Location },
        { provide: Tier2TectonicService },
        { provide: NgZone }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(TectonicComponent);
    location = TestBed.get(Location);
  });

  // it('TectonicComponent should create', () => {
  //   expect(comp).toBeTruthy();
  // });

});
