import { Component, OnInit } from '@angular/core';
import { faCalendar, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  application_title = 'To do list';
  faTachometerAlt = faTachometerAlt; 
  faCalendar = faCalendar;
  faLaughWink = faLaughWink;

  constructor() { }

  ngOnInit(): void {
  }

}
