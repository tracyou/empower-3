import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-local-authority',
  templateUrl: './local-authority.component.html',
  styleUrls: ['./local-authority.component.css']
})
export class LocalAuthorityComponent implements OnInit {

  @Input() checkbox1;
  @Input() checkbox2;
  @Input() example1;
  @Input() name;
  @Input() label;
  @Input() example2;
  @Input() description;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick(): void {
    if (this.isFilled()) {
      confirm('Your answers are saved!');
    } else {
      alert('All fields must be filled');
    }
  }

  isFilled(): boolean {
    return (this.checkbox1 || this.checkbox2) && this.example1 && this.name && this.label && this.example2 && this.description;
  }
}
