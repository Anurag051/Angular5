import { Component,OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
//import Timer = NodeJS.Timer;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imagePath:string='';
  constructor() {}
  ngOnInit() {
    this.imagePath='./assets/images/background-learner.jpg';
  }
 
}
