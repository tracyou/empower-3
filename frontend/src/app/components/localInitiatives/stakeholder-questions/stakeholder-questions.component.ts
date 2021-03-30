import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stakeholder-questions',
  templateUrl: './stakeholder-questions.component.html',
  styleUrls: ['./stakeholder-questions.component.css']
})
export class StakeholderQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit() {
    alert('Your answers have been saved!');
  }
}
