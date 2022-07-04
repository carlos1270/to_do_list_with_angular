import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  public frame: Frame = {id: 0, name: "", background_image: ""};

  constructor(
    private activeRoute: ActivatedRoute,
    private frameListService: FrameListService
  ) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params["id"];
    this.frameListService.getFrame(id).subscribe({
      next: (res) => this.frame = res,
      error: (error) => console.log(error)
    });
  }

}
