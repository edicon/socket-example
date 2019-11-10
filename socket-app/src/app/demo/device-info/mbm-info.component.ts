import { Component, OnInit, OnDestroy, AfterViewInit, Inject, ViewChild, Pipe } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort, MatSelectionListChange } from '@angular/material';
import { PageEvent} from '@angular/material/paginator';

import { MbmInfo } from './mbm-models';
import { environment } from '@env/environment';

const ELEMENT_DATA: MbmInfo[] = [
  { date: 1573368617380, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00001.wav' },
  { date: 1567289507926, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00002.wav' },
  { date: 1567284286497, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00003.wav' },
  { date: 1573368617380, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00004.wav' },
  { date: 1573377217933, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00005.wav' },
  { date: 1573139660403, start: '#', type: 'D', size: 21, macAddr: 'ff:ff:ff:ff', word: 'W', audio: 1, spell: '00006.wav' },
];

@Component({
  selector: 'app-mbm-info',
  templateUrl: './mbm-info.component.html',
  styleUrls: ['./mbm-info.component.scss']
})
export class MbmInfoComponent implements OnInit {

  displayedColumns: string[] = ['no', 'date', 'type', 'word', 'audio', 'spell'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  pageEvent: PageEvent = new PageEvent();
  pageSizeOptions = [5, 10, 20, 100];

  constructor() {
    this.pageEvent.pageSize = this.pageSizeOptions[0];
    this.pageEvent.length = this.dataSource.length;
    this.pageEvent.pageIndex = (this.pageEvent.pageIndex === undefined ? 0 : this.pageEvent.pageIndex);
  }

  ngOnInit() {
  }

  onPage( pageEvent: PageEvent ) {
    if ( !environment.production ) {
      console.log('page: ', pageEvent );
    }
    this.pageEvent = pageEvent;
  }
}
