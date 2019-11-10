import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MbmSocketService {

  constructor(private socket: Socket) {
  }

  sendMessage(msg: string ){
    this.socket.emit('#', msg);
  }

  getMessage() {
    return this.socket
        .fromEvent('A').pipe(
          tap( data => console.log( data )),
          map( data => data )
        );
  }
}
