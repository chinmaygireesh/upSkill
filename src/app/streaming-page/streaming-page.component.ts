import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming-page',
  templateUrl: './streaming-page.component.html',
  styleUrls: ['./streaming-page.component.scss']
})
export class StreamingPageComponent implements OnInit {

  constructor() { }
  title = "Streaming";
  notes = "Notes";
  evaluation = "Evaluation";
  startEvaluation="Start Evaluation"
  ngOnInit(): void {
  }

}
