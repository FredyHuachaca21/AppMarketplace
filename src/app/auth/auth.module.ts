import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
