import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppFirebaseModule } from './modules/app-firebase.module';
import { AppMaterialModule } from './modules/app-material.module';
// import { AppI18nModule } from '@core/i18n/i18n.module';

@NgModule({
    declarations: [
    ],

    imports: [
        CommonModule,
        RouterModule,
        AppFirebaseModule,
        AppMaterialModule,
    ],

    exports: [
    ],

    providers: [
    ]
})
export class AppCoreModule { }
