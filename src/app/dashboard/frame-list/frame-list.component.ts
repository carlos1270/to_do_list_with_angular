import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClipboardList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';

//Interfaces
import { Frame } from 'src/app/interfaces/frame';

//Services
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
    frameName: ['',[Validators.required]],
    backgroundImage: ['', [Validators.required]]
  });

  constructor(
    private frameListService: FrameListService,
    private formBuilder: FormBuilder,
    private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.frameListService.getFrames().subscribe({
      next: (res) => this.frames = res,
      error: (error) => console.log(error)
    });
  }

  public submitFormAddFrame() {
    $('#closeModalAddFrame').trigger('click');
    this.frameListService.saveFrame(this.addFrameForm.value.frameName, this.addFrameForm.value.backgroundImage).subscribe({
      next: (res) => this.pushFrameList(res),
    })
    this.addFrameForm.setValue({frameName: ""});
  }

  public updateFrameList(eventFrame: Frame) {
    let frames: Array<Frame> = [];
    this.frames.forEach((value)=>{
      if (value.id != eventFrame.id) {
        frames.push(value);
      }
    });
    this.frames = frames;
  }

  private pushFrameList(frame: Frame) {
    this.frames.push(frame);
    this.showNotificationSuccess("Novo quadro criado com sucesso!");
  }

  private showNotificationSuccess(text: string) {
    this.notifierService.notify('success', text);
  }
}

