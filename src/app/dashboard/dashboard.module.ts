import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FrameListComponent } from './frame-list/frame-list.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { ReactiveFormsModule } from '@angular/forms';

//Pipes
import { TruncatePipe } from '../pipes/truncate.pipe';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CopyrightComponent,
    FrameListComponent,
    DashboardIndexComponent,
    TruncatePipe
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
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
