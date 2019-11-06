import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
