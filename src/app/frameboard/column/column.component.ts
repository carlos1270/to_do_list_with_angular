import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/interfaces/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() public column: Column = {id: 0, frame_id: 0, name: "", order: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
