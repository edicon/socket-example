import { Injectable } from '@angular/core';
// Firebase
import * as firebase from 'firebase/app';
import { FirebaseAppConfig } from '@angular/fire';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
// RxJs
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicDatabaseService {

  total: number;
  countSubject$ = new BehaviorSubject(0);
  count$: Observable<number>;

  constructor(
    private database: AngularFireDatabase,
    ) {
      this.count$ = this.countSubject$.asObservable();
  }

  // Basic CURD Method
  getValue( url: string ): Observable<any> {
    return this.database.object( url ).valueChanges();
  }
  getSnapshot( url: string ): Observable<AngularFireAction<DatabaseSnapshot<any>>> {
    return this.database.object( url ).snapshotChanges();
  }
  getList( url: string ): Observable<any[]> {
    return this.database.list( url ).valueChanges();
  }
  getListSnapshot( url: string ): Observable<AngularFireAction<DatabaseSnapshot<any>>[]> {
    return this.database.list( url ).snapshotChanges();
  }
  getPushKey(): string {
    return this.database.createPushId();
  }
  pushList( url: string, value: {} ): firebase.database.ThenableReference {
    return this.database.list( url ).push( value );
  }
  set( url: string, value: {} ): Promise<void> {
    return this.database.object( url ).set( value );
  }
  update( url: string, value: {} ): Promise<void> {
    return this.database.object( url ).update( value );
  }
  updates( values: {} ): Promise<void> {
    return this.database.object('/').update( values );
  }
  delete( url: string ) {
    return this.database.object(url).remove();
  }
}
