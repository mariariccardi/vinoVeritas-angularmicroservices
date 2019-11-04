import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { HeaderComponent } from './admin-layout/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AdminLayoutComponent, AdminMenuComponent, HeaderComponent],
    imports: [
      CommonModule,
      RouterModule
    ]
  })
  export class LayoutModule { }
