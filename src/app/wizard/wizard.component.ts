import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

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
