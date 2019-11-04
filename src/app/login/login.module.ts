import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],

    imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule
    ]

  })
  export class LoginModule { }
