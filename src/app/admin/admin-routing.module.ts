import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'admin-dashboard', component: AdminLayoutComponent, children:[
      { path: '', component: AdminDashboardComponent},
      { path: 'users', component: UsersComponent},
      { path: 'companies', component: CompaniesComponent},
      { path: 'articles', component: ArticlesComponent},
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }