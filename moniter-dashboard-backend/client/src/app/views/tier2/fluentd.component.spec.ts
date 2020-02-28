import { Location } from '@angular/common';
import { FluentdComponent } from './fluentd.component';
import { TestBed } from '@angular/core/testing';

describe('FluentdComponent (class only)', () => {
  let comp: FluentdComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FluentdComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(FluentdComponent);
    location = TestBed.get(Location);
  });

  it('FluentdComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
