import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Authority} from '../../models/authority';
import {AuthorityService} from '../../services/authority.service';

@Component({
  selector: 'app-local-authority',
  templateUrl: './local-authority.component.html',
  styleUrls: ['./local-authority.component.css']
})
export class LocalAuthorityComponent implements OnInit {
  @Input() devolopmentGoals;
  @Input() parisAgreement;
  @Input() structure;
  @Input() toolName;
  @Input() toolLabel;
  @Input() toolDescription;
  @Input() support;

  authorityList: Authority[];

  constructor(private authorityService: AuthorityService, private router: Router) {
  }

  newAuthority(): Authority {
    return new Authority(this.devolopmentGoals, this.parisAgreement, this.structure, this.toolName, this.toolLabel, this.toolDescription,
      this.support);
  }

  ngOnInit(): void {
  }

  onSubmitClick(): void {
    confirm('Your answers are saved!');
    const newAuthority = this.newAuthority();
    this.authorityService.save(newAuthority);
    this.router.navigate(['/profileAuthority']);
  }
}
