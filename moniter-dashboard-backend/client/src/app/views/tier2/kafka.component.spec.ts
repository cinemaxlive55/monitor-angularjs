import { KafkaComponent } from './kafka.component';
import {Location} from '@angular/common';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

describe('KafkaComponent (class only)', () => {
  let comp: KafkaComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        KafkaComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(KafkaComponent);
    location = TestBed.get(Location);
  });

  it('KafkaComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
