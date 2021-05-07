import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-authority.component.html',
  styleUrls: ['./profile-authority.component.css']
})
export class ProfileAuthorityComponent implements OnInit {
  authorityName = "Name of Thingy";
  developmentGoals = "Goals";
  parisAgreement = "true";
  structure = "very fluffy";
  toolName = "what a tool";
  toolLabel = "yay labels";
  toolDescription = "This is what the tool does";
  support = "need some support?";


  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

}
