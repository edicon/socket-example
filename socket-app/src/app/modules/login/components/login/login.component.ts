import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

import { environment } from '@env/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  private firebaseAuthChangeListener(response) {
    if (response) {
      if ( !environment.production ) {
        console.log('Logged in :)', response);
      }
    } else {
      if ( !environment.production ) {
        console.log('Logged out :(', response);
      }
    }
  }

  signInSuccess(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    if ( !environment.production ) {
      console.log( signInSuccessData );
    }
  }

  signInError(errorData: FirebaseUISignInFailure) {
    if ( !environment.production ) {
      console.log( errorData );
    }
  }
}
