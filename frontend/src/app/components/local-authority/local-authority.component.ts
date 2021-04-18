import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-local-authority',
  templateUrl: './local-authority.component.html',
  styleUrls: ['./local-authority.component.css']
})
export class LocalAuthorityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitClick(): void {
    confirm('Your answers are saved!');
    this.router.navigate(['/profileAuthority']);
  }
}
