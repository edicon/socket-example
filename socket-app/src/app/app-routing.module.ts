import { NgModule } from '@angular/core';
// import { AuthGuard } from '@core/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { environment } from '@env/environment';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'demo/:id', component: DemoComponent },
    { path: 'login',
      loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)},
    { path: 'mbm',
      loadChildren: () => import('./modules/mbm/mbm.module').then(m => m.MbmModule) },
    { path: 'document',
      loadChildren: () => import('./modules/document/document.module').then( m => m.DocumentModule)},
    { path: '**', redirectTo: 'login'},
];

@NgModule({
    imports: [RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: !environment.production,
        useHash: true
      }) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
