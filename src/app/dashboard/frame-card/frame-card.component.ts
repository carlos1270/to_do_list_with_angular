import { Component, Input, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';

@Component({
  selector: 'app-frame-card',
  templateUrl: './frame-card.component.html',
  styleUrls: ['./frame-card.component.css']
})
export class FrameCardComponent implements OnInit {

  faPencil = faPencil;
  @Input() public frame: Frame = {id:0, name:""};
  
  constructor() { }

  ngOnInit(): void {
  }

}
