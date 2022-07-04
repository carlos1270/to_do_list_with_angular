import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Modules
import { LayoutModule } from '../layout/layout.module';

//Components
import { FrameboardIndexComponent } from './frameboard-index/frameboard-index.component';
import { FrameComponent } from './frame/frame.component';

@NgModule({
  declarations: [
    FrameComponent,
    FrameboardIndexComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    FrameboardIndexComponent
  ]
})
export class FrameboardModule { }
