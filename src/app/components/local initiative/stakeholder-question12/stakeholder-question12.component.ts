import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stakeholder-question12',
  templateUrl: './stakeholder-question12.component.html',
  styleUrls: ['./stakeholder-question12.component.css']
})
export class StakeholderQuestion12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit() {
    alert('Your answers have been saved!');
  }
}
