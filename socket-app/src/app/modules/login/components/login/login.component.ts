import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';

import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserInfo } from './../../models/userInfo';
import { LoginFirebaseService } from './../services/login-firebase.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  userInfo: UserInfo;
  unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private loginFirebase: LoginFirebaseService) {
    }

  ngOnInit() {
    this.angularFireAuth.authState
      .subscribe(this.firebaseAuthChangeListener.bind(this));
  }

  private firebaseAuthChangeListener(user) {
    if (user) {
      if ( !environment.production ) {
        console.log('Logged in :)', user);
      }
      this.checkUserInfo(user);
    } else {
      if ( !environment.production ) {
        console.log('Logged out :(', user);
      }
    }
  }

  signInSuccess(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    if ( !environment.production ) {
      console.log( signInSuccessData );
    }
    // this.checkUserInfo();
  }

  signInError(errorData: FirebaseUISignInFailure) {
    if ( !environment.production ) {
      console.log( errorData );
    }
  }

  checkUserInfo( user: firebase.User ) {
    const uid = user.uid;
    this.loginFirebase.getUserInfo$( uid )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( userInfo => {
        if ( userInfo ) {
          // this.router.navigate(['mbm']);
          this.router.navigate(['demo']);
        } else {
          this.router.navigate(['login/userInfo']);
        }
      });
  }

  ngOnDestroy() {

  }
}
