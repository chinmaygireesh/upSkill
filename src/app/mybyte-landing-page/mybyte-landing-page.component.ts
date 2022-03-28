import { Component, HostBinding, Host, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybyte-landing-page',
  templateUrl: './mybyte-landing-page.component.html',
  styleUrls: ['./mybyte-landing-page.component.scss'],
})
export class MybyteLandingPageComponent implements OnInit {
  @HostBinding('class.app-body') appBody: Host = true;// to give the class while the combonent is loadded by routnig
  constructor() { }

  ngOnInit(): void {
  }

}
