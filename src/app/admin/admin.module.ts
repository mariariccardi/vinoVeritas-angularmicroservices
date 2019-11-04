import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    declarations: [AdminDashboardComponent, UsersComponent, CompaniesComponent, ArticlesComponent],
    imports: [
      CommonModule,
      AdminRoutingModule,
      FormsModule

    ]
  })
  export class AdminModule { }