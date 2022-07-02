import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';

//Modules
import { LayoutModule } from '../layout/layout.module';

//Components
import { FrameboardIndexComponent } from './frameboard-index/frameboard-index.component';

@NgModule({
  declarations: [
    FrameComponent,
    FrameboardIndexComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    FrameboardIndexComponent
  ]
})
export class FrameboardModule { }
