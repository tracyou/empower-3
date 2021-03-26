import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-assets',
  templateUrl: './journey-assets.component.html',
  styleUrls: ['./journey-assets.component.css']
})
export class JourneyAssetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick() {
    confirm('Your answers are saved!');
  }
}
