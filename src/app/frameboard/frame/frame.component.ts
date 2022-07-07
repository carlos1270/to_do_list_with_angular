import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Column } from 'src/app/interfaces/column';
import { Frame } from 'src/app/interfaces/frame';
import { ColumnListService } from 'src/app/services/column-list/column-list.service';
import { FrameListService } from 'src/app/services/frame-list/frame-list.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  faPlus = faPlus;
  newColumn: boolean = true;

  public frame: Frame = {id: 0, name: "", background_image: ""};
  public columns: Array<Column> = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private frameListService: FrameListService,
    private columnListService: ColumnListService
  ) { }

  ngOnInit(): void {
    this.getFrame();
    this.getColumnsByFrame();
  }

  public inputToggle() {
    if (this.newColumn) {
      this.newColumn = false;
    } else {
      this.storeColumn();
      this.newColumn = true;
    }
  }

  private storeColumn() {
    let input: any = document.getElementById('input-new-column');
    if (input.value != "") {
      this.columnListService.saveColumn(this.frame.id, input.value, this.columns.length).subscribe({
        next: (res) => this.columns.push(res),
        error: (error) => console.log(error)
      });
    }
  }

  private getFrame() {
    let id = this.activeRoute.snapshot.params["id"];
    this.frameListService.getFrame(id).subscribe({
      next: (res) => this.frame = res,
      error: (error) => console.log(error)
    });
  }

  private getColumnsByFrame() {
    this.columnListService.getColumnsByFrame(this.activeRoute.snapshot.params["id"]).subscribe({
      next: (res) => this.columns = res,
      error: (error) => console.log(error)
    });
  }
}
