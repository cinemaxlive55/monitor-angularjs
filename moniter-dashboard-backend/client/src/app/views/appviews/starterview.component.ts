import { Component, OnDestroy, OnInit, } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit  {

public nav:any;
  personIDO :any;

public constructor(private route: ActivatedRoute) {
  this.nav = document.querySelector('nav.navbar');
  const personID = this.route.snapshot.paramMap.get('personID');
  
  // this.route.paramMap
  //     .switchMap((params : ParamMap) => this.personIDO=params.get('personID'));
      console.log(personID);
      console.log(this.personIDO);
}

public ngOnInit():any {
  this.nav.className += " white-bg";

}


public ngOnDestroy():any {
  this.nav.classList.remove("white-bg");
}

}
