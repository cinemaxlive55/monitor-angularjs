import {Component, Input, OnInit} from '@angular/core';
import {COLORS} from '../../constants/colors';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.css']
})
export class ColorBlockComponent implements OnInit {

  @Input() color: string; // by default
  @Input() name: string; // by default
  @Input() link: string;

  constructor() {
    this.name = 'DEFAULT BLOCK' ;
    this.color = COLORS.DEFAULT ;
    this.link = '';
  }

  public setColor(color: string) {
    this.color = color ;
  }

  ngOnInit() {
  }


}
