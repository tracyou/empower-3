import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorityService} from "../../../services/authority.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile-authority.component.html',
  styleUrls: ['./profile-authority.component.css']
})
export class ProfileAuthorityComponent implements OnInit {
  authorityName = "help";
  developmentGoals = "Goals";
  parisAgreement = "true";
  structure = "very fluffy";
  toolName = "what a tool";
  toolLabel = "yay labels";
  toolDescription = "This is what the tool does";
  support = "need some support?";

  authority = this.authorityService.getAuthority();


  constructor(private authorityService: AuthorityService, private router: Router) {

  }


  ngOnInit(): void {
    console.log(this.authority);
  }

}
