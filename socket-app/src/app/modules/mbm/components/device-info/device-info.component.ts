import { Component, OnInit } from '@angular/core';

import { DeviceInfo } from '../../models/mbm-models';

const ELEMENT_DATA: DeviceInfo[] = [
  {no: 1, date: 1, count: 1, word: 'test1'},
  {no: 2, date: 2, count: 2, word: 'test2'},
  {no: 3, date: 3, count: 3, word: 'test3'},
];


@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {

  displayedColumns: string[] = ['no', 'date', /* 'count', 'word' */];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
