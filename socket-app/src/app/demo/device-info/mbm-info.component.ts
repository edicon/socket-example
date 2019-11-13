import { Component, OnInit, OnDestroy, AfterViewInit, Inject, ViewChild, Pipe, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort, MatSelectionListChange } from '@angular/material';
import { PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { MbmFirebaseService } from '@modules/mbm/services/mbm-firebase.service';

import { MbmInfo } from './mbm-models';
import { environment } from '@env/environment';

const ELEMENT_DATA: MbmInfo[] = [
  /*
  { timestamp: 1573368617380, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00001.wav' },
  { timestamp: 1567289507926, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00002.wav' },
  { timestamp: 1567284286497, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00003.wav' },
  { timestamp: 1573368617380, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00004.wav' },
  { timestamp: 1573377217933, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00005.wav' },
  { timestamp: 1573139660403, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00006.wav' },
  */
];

@Component({
  selector: 'app-mbm-info',
  templateUrl: './mbm-info.component.html',
  styleUrls: ['./mbm-info.component.scss']
})
export class MbmInfoComponent implements OnInit, OnDestroy {

  @Input() uid: string;

  user$: Observable<firebase.User>;
  user: firebase.User;
  mbmList$: Observable<MbmInfo[]>;
  mbmList: MbmInfo[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  displayedColumns: string[] = ['no', 'date', 'type', 'word', 'audio', 'spell'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions = [10, 20, 100];

  isMobile: Boolean;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private mbmFirebaseService: MbmFirebaseService
    ) {

    if ( !environment.production ) {
      this.pageSizeOptions = [5, 10, 20, 100];
      console.log('UID', this.uid);
    }
    this.isMobile = this.checkMobile();
    this.user$ = this.angularFireAuth.authState;

    this.pageEvent.pageSize = this.pageSizeOptions[0];
    this.pageEvent.length = this.dataSource.length;
    this.pageEvent.pageIndex = (this.pageEvent.pageIndex === undefined ? 0 : this.pageEvent.pageIndex);
  }

  ngOnInit() {

    if ( this.uid ) {
      this.getMbmList();
    } else {
      this.user$.subscribe( user => {
        this.user = user;
        if ( user ) {
          this.uid = user.uid;
          this.getMbmList();
        }
      });
    }
  }

  getMbmList() {
    this.mbmList$ = this.mbmFirebaseService.getMbmList(this.uid ).pipe(takeUntil(this.destroy$));
    this.mbmList$.subscribe( list => {
      if ( !environment.production ) {
        console.table( list );
      }
      this.mbmList = list;
      this.pageEvent.length = list.length;
      this.dataSource = list.reverse();
    });
  }

  onPage( pageEvent: PageEvent ) {
    if ( !environment.production ) {
      console.log('page: ', pageEvent );
    }
    this.pageEvent = pageEvent;
  }

  checkMobile() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
  }

  onLogout() {
    this.angularFireAuth.auth.signOut()
    .then( _ => this.router.navigate(['login']));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
