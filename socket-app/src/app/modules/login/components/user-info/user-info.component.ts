import { LoginFirebaseService } from './../services/login-firebase.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { UserInfo } from './../../models/userInfo';
import { environment } from '@env/environment';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo: UserInfo;

  constructor(
    private router: Router,
    private loginFirebaseService: LoginFirebaseService
  ) {
    this.userInfo = new UserInfo();
  }

  ngOnInit() {
  }

  getUserInfo() {

  }

  selectSex( event ) {
    if ( environment ) {
      console.log('sel: ', event );
    }
  }

  onRegisterUserInfo() {
    console.log(this.userInfo);
    const user = this.loginFirebaseService.user;
    if ( user !== null ) {
      this.loginFirebaseService.update( user.uid, this.userInfo )
        .then( _ => this.router.navigate(['mbm']))
        .catch( error => console.warn(error ));
    }
  }

  onCancelUserInfo() {
    this.router.navigate(['mbm']);
  }
}
