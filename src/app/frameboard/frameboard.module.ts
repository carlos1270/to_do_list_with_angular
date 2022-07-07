import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Modules
import { LayoutModule } from '../layout/layout.module';

//Components
import { FrameboardIndexComponent } from './frameboard-index/frameboard-index.component';
import { FrameComponent } from './frame/frame.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    FrameComponent,
    FrameboardIndexComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    FrameboardIndexComponent
  ]
})
export class FrameboardModule { }
