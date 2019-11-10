import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '@core/modules/app-material.module';
import { MbmRoutingModule } from './mbm-routing.module';
import { MbmComponent } from './mbm.component';
import { DeviceInfoComponent } from './components/device-info/device-info.component';
import { LearningInfoComponent } from './components/learning-info/learning-info.component';
import { MbmSocketComponent } from './components/mbm-socket/mbm-socket.component';


@NgModule({
  declarations: [MbmComponent, DeviceInfoComponent, LearningInfoComponent, MbmSocketComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    MbmRoutingModule
  ]
})
export class MbmModule { }
