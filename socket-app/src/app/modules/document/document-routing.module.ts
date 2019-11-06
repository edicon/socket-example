import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentLayoutComponent } from './document-layout.component';

const docsRoutes: Routes = [
  { path: '', component: DocumentLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(docsRoutes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
