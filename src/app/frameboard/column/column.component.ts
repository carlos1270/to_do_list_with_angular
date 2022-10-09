import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisV, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Column } from 'src/app/interfaces/column';
import { ColumnListService } from 'src/app/services/column-list/column-list.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  faExclamationTriangle = faExclamationTriangle;
  editActive: boolean = true;
  @Input() public column: Column = {id: 0, frame_id: 0, name: "", order: 0};

  public deleteColumnModal: string = "";
  public deleteColumnModalLink: string = "";
  public closeModalDeleteColumn: string = "";

  constructor(private columnListService: ColumnListService) { }

  ngOnInit(): void {
    this.deleteColumnModal = `deleteColumnModal${this.column.id}`;
    this.deleteColumnModalLink = `#${this.deleteColumnModal}`;
    this.closeModalDeleteColumn = `${this.deleteColumnModal}Close`;
  }

  public editToggle() {
    if (this.editActive) {
      this.editActive = false;
    } else {
      this.updateColumn();
      this.editActive = true;
    }
  }

  public deleteColumn() {
    this.deleteColumnModal = `deleteColumnModal${this.column.id}`;
    this.deleteColumnModalLink = `#${this.deleteColumnModal}`;
    this.closeModalDeleteColumn = `${this.deleteColumnModal}Close`;
  }

  private updateColumn() {
    let columnName: any = document.getElementById('input-edit-column');
    this.columnListService.updateNameColumn(this.column.id, columnName.value).subscribe({
      next: (res) => this.column = res,
      error: (error) => console.log(error)
    });
  }
}
