import { Component, OnInit , HostBinding, Host,} from '@angular/core';

@Component({
  selector: 'app-record-screen',
  templateUrl: './record-screen.component.html',
  styleUrls: ['./record-screen.component.scss']
})
export class RecordScreenComponent implements OnInit {
  @HostBinding('class.app-body') appBody: Host = true;// to give the class while the combonent is loadded by routnig

  constructor() { }

  ngOnInit(): void {
  }

}
