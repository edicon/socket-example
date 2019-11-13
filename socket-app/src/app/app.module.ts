import { AppMaterialModule } from '@core/modules/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppCoreModule } from './core/app-core.module';
import { SocketModule } from './modules/socket/socket.module';

import { MbmFirebaseService } from './modules/mbm/services/mbm-firebase.service';

import { AppComponent } from './app.component';

import { environment } from '@env/environment';
import { DemoComponent } from './demo/demo.component';
import { MbmInfoComponent } from './demo/device-info/mbm-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MbmInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'app-mbm'),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Feature Modules
    AppRoutingModule,
    AppMaterialModule,
    AppCoreModule,
    SocketModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
