import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { BasicDatabaseService } from '@core/services/fire-basic-database.service';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
// RxJs
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './../../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginFirebaseService {

  mbmSubject$ = new BehaviorSubject(0);
  mbm$: Observable<number>;
  user$: Observable<firebase.User>;
  user: firebase.User;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private database: BasicDatabaseService ) {
    this.mbm$ = this.mbmSubject$.asObservable();
    this.user$ = this.angularFireAuth.authState;
    this.user$.subscribe( user => {
        this.user = user;
      });
   }

  getUserInfo$( uid: string ): Observable<UserInfo> {
    return this.getValue( `/mbm/userInfo/${uid}`);
  }
  updateUserInfo$( uid: string, userInfo: UserInfo ): Promise<void>  {
    return this.update( `/mbm/userInfo/${uid}`, userInfo );
  }

  getValue( url: string ): Observable<any> {
    return this.database.getValue( url );
  }

  /* ---------- */
  getSnapshot( url: string ): Observable<AngularFireAction<DatabaseSnapshot<any>>> {
    return this.database.getSnapshot( url );
  }
  getList( url: string ): Observable<any[]> {
    return this.database.getList( url );
  }
  getListSnapshot( url: string ): Observable<AngularFireAction<DatabaseSnapshot<any>>[]> {
    return this.database.getListSnapshot( url );
  }
  getPushKey(): string {
    return this.database.getPushKey();
  }
  pushList( url: string, value: {} ): firebase.database.ThenableReference {
    return this.database.pushList( url, value );
  }
  set( url: string, value: {} ): Promise<void> {
    return this.database.set( url, value );
  }
  update( url: string, value: {} ): Promise<void> {
    return this.database.update( url, value );
  }
  updates( values: {} ): Promise<void> {
    return this.database.updates( values );
  }
  delete( url: string ) {
    return this.database.delete(url);
  }

}
