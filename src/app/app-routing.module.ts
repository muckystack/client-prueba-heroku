import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterLoginComponent } from './components/auth/register-login/register-login.component';


const routes: Routes = [
  {path:'access', component: RegisterLoginComponent},
  {path:'', redirectTo: 'access', pathMatch: 'full'},
  {path: '**', redirectTo: 'access', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
