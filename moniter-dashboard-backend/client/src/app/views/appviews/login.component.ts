import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth.service';
import {UserRoleService} from '../../services/user-role.service';
import {User} from '../../services/user';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class LoginComponent implements OnInit {
  @Input() user: User;
  data:any;
  public constructor(public authService: AuthService, public router: Router, private userRoleService: UserRoleService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  login() {

    this.userRoleService.getUser(this.user).subscribe((user) => {
      if (user[0]) {
        if (user[0].role) {
          let redirectUrl = '/profile';
          let userString = JSON.stringify(user[0]);
          localStorage.setItem('user',userString);
          if('operator' == user[0].role){
            redirectUrl = '/tier1';
          }
          this.authService.login().subscribe(() => {
            if (this.authService.isLoggedIn) {
              let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : redirectUrl;
              console.log("this: "+ this.authService.redirectUrl);
              console.log(redirectUrl);
              this.router.navigate([redirect]);
            }
          });
        }
      } else {
        alert('No user ' + this.user.username);
      }

    });
  }
}
