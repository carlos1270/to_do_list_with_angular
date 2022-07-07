import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Components
import { HeaderComponent } from './header/header.component';

//Pipes
import { TruncatePipe } from '../pipes/truncate.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    TruncatePipe
  ]
})
export class LayoutModule { }
