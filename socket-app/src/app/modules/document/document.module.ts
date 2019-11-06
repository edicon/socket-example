import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SocketModule } from './../socket/socket.module';
import { DocumentRoutingModule } from './document-routing.module';

import { DocumentComponent } from '@document/components/document/document.component';
import { DocumentListComponent } from '@document/components/document-list/document-list.component';


@NgModule({
  declarations: [
    DocumentComponent,
    DocumentListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SocketModule,
    DocumentRoutingModule
  ],
  exports: [
    DocumentComponent,
    DocumentListComponent,
  ]
})
export class DocumentModule { }
