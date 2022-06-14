import { Component, OnInit } from '@angular/core';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit {

  faClipboardList = faClipboardList
  public frames: Array<Frame> = []

  constructor(private frameListService: FrameListService) { }

  ngOnInit(): void {
    this.frameListService.getFrames().subscribe(
      res => this.frames = res,
      error => console.log(error)
    );
  }

}
