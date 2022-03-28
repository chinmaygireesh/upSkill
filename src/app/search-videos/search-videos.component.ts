import { Component, OnInit, HostBinding, Host, } from '@angular/core';

@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss']
})
export class SearchVideosComponent implements OnInit {
  @HostBinding('class.app-body') appBody: Host = true;// to give the class while the combonent is loadded by routnig

  constructor() { }

  ngOnInit(): void {
  }

}
