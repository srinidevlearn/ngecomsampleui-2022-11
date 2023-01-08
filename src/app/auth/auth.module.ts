import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // lazy load routing or lazy loading
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  { path: '', redirectTo: 'register' }, // by default redirect happens for corresponding module
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule,ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
