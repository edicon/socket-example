import { BasicDatabaseService } from './../../../core/services/fire-basic-database.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
// RxJs
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbmFirebaseService {

  mbmSubject$ = new BehaviorSubject(0);
  mbm$: Observable<number>;

  constructor( private database: BasicDatabaseService ) {
    this.mbm$ = this.mbmSubject$.asObservable();
   }

  getMbmList( uid: string ): Observable<any[]> {
    return this.database.getList( `/mbm/device/${uid}` );
  }

  geUserInfoList( uid: string ) {
    return this.database.getSnapshot( `/mbm/userInfo` );
  }

  geUserInfo( uid: string ): Observable<any> {
    return this.database.getSnapshot( `/mbm/userInfo/${uid}` );
  }

  // --------------------------------------- //
  getValue( url: string ): Observable<any> {
    return this.database.getValue( url );
  }
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
