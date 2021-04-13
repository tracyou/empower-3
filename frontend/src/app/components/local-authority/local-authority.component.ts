import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-authority',
  templateUrl: './local-authority.component.html',
  styleUrls: ['./local-authority.component.css']
})
export class LocalAuthorityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick(): void {
    confirm('Your answers are saved!');
  }
}
