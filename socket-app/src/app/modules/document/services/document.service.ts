import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { Document } from '../models/document';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  currentDocument: any; //  = this.socket.fromEvent<Document>('document');
  documents: any; //  = this.socket.fromEvent<string[]>('documents');

  constructor(private socket: Socket) {
    this.currentDocument = this.socket.fromEvent<Document>('document');
    this.documents = this.socket.fromEvent<string[]>('documents');
    if ( !environment.production ) {
      console.log( this.currentDocument, this.documents );
    }
  }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
