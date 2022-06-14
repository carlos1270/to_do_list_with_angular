import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FrameListComponent } from './frame-list/frame-list.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CopyrightComponent,
    FrameListComponent,
    DashboardIndexComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    CopyrightComponent,
    FrameListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class DashboardModule { }
