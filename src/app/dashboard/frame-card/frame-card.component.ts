import { Component, Input, OnInit } from '@angular/core';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';

@Component({
  selector: 'app-frame-card',
  templateUrl: './frame-card.component.html',
  styleUrls: ['./frame-card.component.css']
})
export class FrameCardComponent implements OnInit {

  faPencil = faPencil;
  faCheck = faCheck;
  iconInput = faPencil;

  editFrame: boolean = true;
  @Input() public frame: Frame = {id:0, name:""};
  
  constructor(private frameListService: FrameListService) { }

  ngOnInit(): void {}

  public editActiveToggle() {
    if (this.editFrame) {
      this.editFrame = false;
      this.iconInput = faCheck;
    } else {
      this.saveFrame();
      this.editFrame = true;
      this.iconInput = faPencil;
    }
  }

  private saveFrame() {
    if (this.frame.name.length > 2) {
      this.frameListService.updateFrame(this.frame).subscribe({
        next: (res) => this.frame = res,
        error: (error) => console.log(error)
      });
    }
  }
}
