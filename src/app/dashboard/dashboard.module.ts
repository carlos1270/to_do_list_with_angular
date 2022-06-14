import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CopyrightComponent } from './copyright/copyright.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CopyrightComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
