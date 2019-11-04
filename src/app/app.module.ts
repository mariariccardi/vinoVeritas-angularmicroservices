import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminMenuComponent } from './layout/admin-layout/admin-menu/admin-menu.component';
import { HeaderComponent } from './layout/admin-layout/header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    LayoutModule,
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
