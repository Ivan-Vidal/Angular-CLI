import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPrimaryComponent } from './login-primary/login-primary.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginPrimaryComponent },
  { path: 'home', loadChildren: () => import('./home/home.component')}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
