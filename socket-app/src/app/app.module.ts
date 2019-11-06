import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from '@angular/fire';

import { HomeLazyLoadModule } from './home/home-lazy-load.module';
import { DocumentModule } from './modules/document/document.module';
import { AppComponent } from './app.component';

import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
    // DocumentListComponent,
    // DocumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'app-mbm'),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Feature Modules
    // HomeLazyLoadModule,
    DocumentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
