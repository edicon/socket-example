import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MbmSocketService } from '@modules/mbm/services/mbm-socket.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-mbm-socket',
  templateUrl: './mbm-socket.component.html',
  styleUrls: ['./mbm-socket.component.scss']
})

export class MbmSocketComponent implements OnInit {

  messages$: Observable<any>;

  constructor( private mbmSocketService: MbmSocketService) { }

  ngOnInit() {
    this.onGetMsg();
  }

  onGetMsg() {
    this.messages$ = this.mbmSocketService.getMessage();
    this.messages$.subscribe( msg => console.log(msg));
  }

  onSendMsg() {
    const msg = '#';
    this.mbmSocketService.sendMessage( msg );
  }

}
