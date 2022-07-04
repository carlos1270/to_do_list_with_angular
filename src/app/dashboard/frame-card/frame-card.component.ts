import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faExclamationTriangle, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frame-card',
  templateUrl: './frame-card.component.html',
  styleUrls: ['./frame-card.component.css']
})
export class FrameCardComponent implements OnInit {

  faPencil = faPencil;
  iconInput = faPencil;
  faTrash = faTrash;
  faExclamationTriangle = faExclamationTriangle;
  faEye = faEye;

  @Input() public frame: Frame = {id:0, name:"", background_image:""};
  @Output() public deleteFrameEvent = new EventEmitter();

  public editFrameModal: string = "";
  public editFrameModalLink: string = "";
  public closeModalEditFrame: string = "";

  public deleteFrameModal: string = "";
  public deleteFrameModalLink: string = "";
  public closeModalDeleteFrame: string = "";

  public editFrameForm: FormGroup = this.formBuilder.group({
    frameName: [this.frame.name,[Validators.required]],
    backgroundImage: [this.frame.background_image, [Validators.required]]
  });
  
  constructor(
    private frameListService: FrameListService,
    private notifierService: NotifierService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.editFrameModal = `editFrameModal${this.frame.id}`;
    this.editFrameModalLink = `#${this.editFrameModal}`;
    this.closeModalEditFrame = `${this.editFrameModal}Close`;

    this.deleteFrameModal = `deleteFrameModal${this.frame.id}`;
    this.deleteFrameModalLink = `#${this.deleteFrameModal}`;
    this.closeModalDeleteFrame = `${this.deleteFrameModal}Close`;

    this.editFrameForm.setValue({'frameName': this.frame.name, 'backgroundImage': this.frame.background_image});    
  }

  public editFrame() {
    $(`#${this.closeModalEditFrame}`).trigger('click');
    let frame: Frame = this.setFrameForm();
    this.frameListService.updateFrame(frame).subscribe({
      next: (res) => this.updateComponent(res),
      error: (error) => console.log(error)
    });
  }

  public deleteFrame () {
    this.frameListService.deleteFrame(this.frame).subscribe({
      next: (res) => this.destroyComponent(),
      error: (error) => console.log(error)
    });
  }

  private updateComponent(frame: Frame) {
    this.frame = frame;
    this.showNotificationSuccess("Quadro atualizado com sucesso!");
  }

  private destroyComponent() {
    $(`#${this.closeModalDeleteFrame}`).trigger('click');
    this.showNotificationSuccess("Quadro deletado com sucesso!");
    this.deleteFrameEvent.emit(this.frame);
  }

  private showNotificationSuccess(text: string) {
    this.notifierService.notify('success', text);
  }

  private setFrameForm(): Frame {
    let frame: Frame = {id: 0, name: "", background_image: ""};
    frame.id = this.frame.id;
    frame.name = this.editFrameForm.value.frameName;
    frame.background_image = this.editFrameForm.value.backgroundImage;
    return frame;
  }
}
