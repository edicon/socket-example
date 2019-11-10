import { LoginFirebaseService } from './../services/login-firebase.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { UserInfo } from './../../models/userInfo';
import { MatUtilsService } from '@app/core/services/mat-utils.service';
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
    private matUtilsService: MatUtilsService,
    private loginFirebaseService: LoginFirebaseService
  ) {
    this.userInfo = new UserInfo();
    this.userInfo.nation = 'Korea';
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
    if ( !environment.production ) {
      console.log( this.userInfo );
    }
    if (this.checkUserInfo( this.userInfo )) {
      const user = this.loginFirebaseService.user;
      if ( user !== null ) {
        this.loginFirebaseService.updateUserInfo$( user.uid, this.userInfo )
          .then( _ => {
            this.matUtilsService.openSnackBar('사용자 정보가 등록 되었습니다.', '', 2);
            this.router.navigate(['mbm']);
          })
          .catch( error => console.warn(error ));
      } else {
        this.matUtilsService.openSnackBar('로그인 후, 사용 바랍니다.', '확인', 3);
        this.router.navigate(['login']);
      }
    }
  }

  onCancelUserInfo() {
    this.router.navigate(['mbm']);
  }

  checkUserInfo( userInfo: UserInfo ) {
    if ( !userInfo.nation ) {
      userInfo.nation = 'Korea';
    }
    if ( !userInfo.age ) {
      this.matUtilsService.openSnackBar('나이를 입력바랍니다.', '확인', 3);
      return false;
    }
    if ( !userInfo.sex ) {
      this.matUtilsService.openSnackBar('성별을 선택바랍니다.', '확인', 3);
      return false;
    }
    if ( !userInfo.region ) {
      this.matUtilsService.openSnackBar('지역을 입력바랍니다.', '확인', 3);
      return false;
    }
    return true;
  }
}
