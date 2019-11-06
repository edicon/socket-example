import { NgModule } from '@angular/core';
// import { AuthGuard } from '@core/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'document',
      loadChildren: () => import('../modules/document/document.module').then( m => m.DocumentModule)},
    /*
    {path: 'login',
      loadChildren: () => import('../pages/login/login.module').then( m => m.AppLoginModule)},
    */

    {path: '**', redirectTo: 'main/dashboard'},
    // {path: '**', redirectTo: 'main/aiml/classifier/image'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: !environment.production }) ],
    exports: [RouterModule]
})
export class HomeLazyLoadModule { }
