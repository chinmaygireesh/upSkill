import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor() { }

  watching = "Watching Videos";
  watched = "Watched Videos";
  wishList = "WishList";

  ngOnInit(): void {
  }

}
