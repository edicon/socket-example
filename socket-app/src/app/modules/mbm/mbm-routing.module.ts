import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbmComponent } from './mbm.component';

const routes: Routes = [
  { path: '', component: MbmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MbmRoutingModule { }
