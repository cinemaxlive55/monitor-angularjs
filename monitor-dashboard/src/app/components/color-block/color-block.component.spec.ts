import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBlockComponent } from './color-block.component';
import {COLORS} from '../../constants/colors';

describe('ColorBlockComponent', () => {
  let component: ColorBlockComponent;
  let fixture: ComponentFixture<ColorBlockComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ColorBlockComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ColorBlockComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('ColorBlockComponent should create', () => {
    component = new ColorBlockComponent();
    expect(component).toBeTruthy();
  });

   it('it should return defalt value', () => {
    component = new ColorBlockComponent();
    component.setColor(COLORS.GRAY);
    expect(component.color).toBe(COLORS.GRAY);
    expect(component.color).toBe(COLORS.GRAY,'gray color');
  });
});
