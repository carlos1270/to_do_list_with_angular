import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { NotifierModule }  from  'angular-notifier';

//Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { FrameboardModule } from './frameboard/frameboard.module';

//Components
import { FrameListComponent } from './dashboard/frame-list/frame-list.component';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { FrameboardIndexComponent } from './frameboard/frameboard-index/frameboard-index.component';

const routes: Routes = [
 { path: "", component: DashboardIndexComponent },
 { path: "frames", component: FrameListComponent },
 { path: "frame/:id", component: FrameboardIndexComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DashboardModule,
    FrameboardModule,
    RouterModule.forRoot(routes),
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
