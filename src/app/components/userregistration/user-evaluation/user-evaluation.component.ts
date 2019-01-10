import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.css']
})
export class UserEvaluationComponent implements OnInit {
  highestEducation :string;
  constructor() { }

  ngOnInit() {
  }

}
