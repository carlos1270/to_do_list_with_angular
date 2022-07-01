import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule, Routes } from '@angular/router';
import { NotifierModule }  from  'angular-notifier';

//Components
import { FrameListComponent } from './dashboard/frame-list/frame-list.component';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';

const routes: Routes = [
 { path: "", component: DashboardIndexComponent },
 { path: "frames", component: FrameListComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DashboardModule,
    RouterModule.forRoot(routes),
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
