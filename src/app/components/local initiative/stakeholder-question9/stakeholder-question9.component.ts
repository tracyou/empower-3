import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stakeholder-question9',
  templateUrl: './stakeholder-question9.component.html',
  styleUrls: ['./stakeholder-question9.component.css']
})
export class StakeholderQuestion9Component implements OnInit {
  private router: any;
  constructor() { }

  ngOnInit(): void {
  }

  goToNextQuestion() {
    console.log('test');
    this.router.navigate(['/']);
  }
}
