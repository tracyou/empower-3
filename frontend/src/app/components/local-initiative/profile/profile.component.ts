import { Component, OnInit } from '@angular/core';
import {InitiativeService} from '../../../services/initiative.service';
import {Initiative} from '../../../models/initiative';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // initiativeList: Initiative;


  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'
  }

  ngOnInit(): void {
    // this.initiative = this.initiativeService.getLastInitiative();
    // console.log(this.initiative);
  }

}
