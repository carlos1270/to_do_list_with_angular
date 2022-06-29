import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClipboardList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.css']
})
export class FrameListComponent implements OnInit {

  faClipboardList = faClipboardList;
  faPlusCircle = faPlus;

  public frames: Array<Frame> = [];
  public addFrameForm: FormGroup = this.formBuilder.group({
    frameName: ['',[Validators.required]]
  });

  constructor(
    private frameListService: FrameListService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.frameListService.getFrames().subscribe({
      next: (res) => this.frames = res,
      error: (error) => console.log(error)
    });
  }

  public submitFormAddFrame() {
    $('#closeModalAddFrame').trigger('click');
    this.frameListService.saveFrame(this.addFrameForm.value.frameName).subscribe({
      next: (res) => this.frames.push(res),
    })
    this.addFrameForm.setValue({frameName: ""});
  }
}

