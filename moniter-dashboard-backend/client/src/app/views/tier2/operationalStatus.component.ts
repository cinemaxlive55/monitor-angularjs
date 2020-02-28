import {Component, OnDestroy, OnInit,} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'operationalStatus',
  templateUrl: 'operationalStatus.template.html'
})

export class OperationalStatusComponent implements OnDestroy, OnInit {

  public nav: any;

  public constructor() {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit(): any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy(): any {
    this.nav.classList.remove("white-bg");
  }

}
