import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { AuthService } from '../../../auth.service';
import { Router } from "@angular/router";

declare var jQuery:any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {
  constructor(public authService: AuthService, public router: Router){
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
  
  logout(): void{
    this.authService.logout();
    this.authService.redirectUrl = null;
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
