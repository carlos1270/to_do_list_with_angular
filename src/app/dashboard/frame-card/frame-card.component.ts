import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCheck, faExclamationTriangle, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Frame } from 'src/app/interfaces/frame';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-frame-card',
  templateUrl: './frame-card.component.html',
  styleUrls: ['./frame-card.component.css']
})
export class FrameCardComponent implements OnInit {

  faPencil = faPencil;
  faCheck = faCheck;
  iconInput = faPencil;
  faTrash = faTrash;
  faExclamationTriangle = faExclamationTriangle;
  faEye = faEye;
  editFrame: boolean = true;

  @Input() public frame: Frame = {id:0, name:""};
  @Output() public deleteFrameEvent = new EventEmitter();

  public deleteFrameModal: string = "";
  public deleteFrameModalLink: string = "";
  public closeModalDeleteFrame: string = "";
  
  constructor(
    private frameListService: FrameListService,
    private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.deleteFrameModal = `deleteFrameModal${this.frame.id}`;
    this.deleteFrameModalLink = `#${this.deleteFrameModal}`;
    this.closeModalDeleteFrame = `${this.deleteFrameModal}Close`;
  }

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
        next: (res) => this.updateComponent(res),
        error: (error) => console.log(error)
      });
    }
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
}
