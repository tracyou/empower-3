import { Component, OnInit } from '@angular/core';
import {InitiativeService} from '../../../services/initiative.service';
import {Initiative} from '../../../models/initiative';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // initiativeList: Initiative;


  constructor(private initiativeService: InitiativeService, private initiative: Observable<Initiative>) {
  }

  ngOnInit(): void {
    // this.initiative = this.initiativeService.getLastInitiative();
    // console.log(this.initiative);
  }

}
