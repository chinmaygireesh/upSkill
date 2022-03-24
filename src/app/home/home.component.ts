import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  machines = [
    {type:"Excavator",
    manufacturer:[
      {
        name:"CAT",
        models:[
          {name:"CAT EC15N,EC18N; EC18LN",
          videos:["loading","dumbing"]},
          {name:"CAT EC15N,EC18N; EC18LN",
          videos:["loading","dumbing"]},
          {name:"CAT EC15N,EC18N; EC18LN",
          videos:["Loading","dumbing"]}]
      }
    ]
    }
  ]
  tutorials="Tutorials"
  ngOnInit(): void {
    var toggler = document.getElementsByClassName("caret");
    var i;
    
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

}
