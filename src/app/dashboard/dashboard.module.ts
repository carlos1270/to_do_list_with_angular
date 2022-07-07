import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule }  from  'angular-notifier';

//Modules
import { LayoutModule } from '../layout/layout.module';

//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FrameListComponent } from './frame-list/frame-list.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { FrameCardComponent } from './frame-card/frame-card.component';

@NgModule({
  declarations: [
    SidebarComponent,
    CopyrightComponent,
    FrameListComponent,
    DashboardIndexComponent,
    FrameCardComponent
  ],
  exports: [
    SidebarComponent,
    CopyrightComponent,
    FrameListComponent    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule,
    LayoutModule
  ]
})
export class DashboardModule { }
