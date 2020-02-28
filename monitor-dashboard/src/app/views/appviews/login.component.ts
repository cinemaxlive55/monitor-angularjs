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

    this.userRoleService.getUser(this.user).subscribe((data) => {
      if (data) {
        // data is a JSON obj, but can not read token property directly
        sessionStorage.setItem("token", JSON.parse(JSON.stringify(data)).token);
        this.userRoleService.getUserRoles(sessionStorage.getItem('token')).subscribe( roleData =>{
          let resData = JSON.parse(JSON.stringify(roleData));
          if (resData.success) {
            let redirectUrl = '/profile';
            resData.data.username = this.user.username;
            let userString = JSON.stringify(resData.data);
            sessionStorage.setItem('user',userString);
            if('operator' === resData.data.role){
              redirectUrl = '/tier1';
            }
            this.authService.login().subscribe(() => {
              if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : redirectUrl;
                this.router.navigate([redirect]);
              }
            });
          }
        });

      } else {
        alert('No user ' + this.user.username);
      }

    });
  }
}
