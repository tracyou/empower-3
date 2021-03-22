import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmitClick() {
    confirm('Your answers are saved!');
  }
}
