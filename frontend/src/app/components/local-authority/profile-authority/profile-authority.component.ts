import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-authority.component.html',
  styleUrls: ['./profile-authority.component.css']
})
export class ProfileAuthorityComponent implements OnInit {


  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

}
