import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-right',
  templateUrl: './sidenav-right.component.html',
  styleUrls: ['./sidenav-right.component.scss']
})
export class SidenavRightComponent implements OnInit {

  constructor() { }
  watched = "Watched staffs";
  whatchin = "Watching staffs"; 
  ngOnInit(): void {
  }

}
