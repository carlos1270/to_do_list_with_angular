import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Column } from 'src/app/interfaces/column';
import { ColumnListService } from 'src/app/services/column-list/column-list.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  editActive: boolean = true;
  @Input() public column: Column = {id: 0, frame_id: 0, name: "", order: 0};

  constructor(private columnListService: ColumnListService) { }

  ngOnInit(): void {
  }

  public editToggle() {
    if (this.editActive) {
      this.editActive = false;
    } else {
      this.updateColumn();
      this.editActive = true;
    }
  }

  private updateColumn() {
    let columnName: any = document.getElementById('input-edit-column');
    this.columnListService.updateNameColumn(this.column.id, columnName.value).subscribe({
      next: (res) => this.column = res,
      error: (error) => console.log(error)
    });
  }
}
