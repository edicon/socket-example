import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MbmRoutingModule } from './mbm-routing.module';
import { MbmComponent } from './mbm.component';


@NgModule({
  declarations: [MbmComponent],
  imports: [
    CommonModule,
    MbmRoutingModule
  ]
})
export class MbmModule { }
