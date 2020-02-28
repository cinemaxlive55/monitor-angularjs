import { Location } from '@angular/common';
import { ElasticComponent } from './elastic.component';
import { TestBed } from '@angular/core/testing';

describe('ElasticComponent (class only)', () => {
  let comp: ElasticComponent;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ElasticComponent,
        { provide: Location }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(ElasticComponent);
    location = TestBed.get(Location);
  });

  it('ElasticComponent should create', () => {
    expect(comp).toBeTruthy();
  });

});
