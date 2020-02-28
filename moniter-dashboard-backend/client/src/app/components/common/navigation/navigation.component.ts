import { User } from "../../../services/user";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'jquery-slimscroll';

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {
  opsRole = false;
  user: User;
  opsClass: string;
  constructor(private router: Router,public route: ActivatedRoute) {}
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    if('citizen'==this.user.role){
      this.opsRole = false;
    }else{
      this.opsRole = true;
    }
  }

  ngAfterViewInit() {
     jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    if("tier1"===routename){
      return !(this.router.url.indexOf(routename) > -1);
    }else{
      return this.router.url.indexOf(routename) > -1;
    }
  }

}
