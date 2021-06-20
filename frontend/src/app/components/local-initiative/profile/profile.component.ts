import {Component, OnInit, Output} from '@angular/core';
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
  name: string;
  location: string;
  date: string;
  theme: string;
  goals: string;
  challenges: string;
  challengesList = ['Social - community building', 'Economic - investment, funds', 'Legal - regulations, approvals, policies'
    , 'Technical - infrastructure, technology, installation'];
  collaboration: string;


  expertise1: string;
  expertise2: string;
  expertise3: string;

  expertiseCombined: string;
  email: string;
  website: string;
  number: string;

  initiative: Initiative;


  constructor(private router: Router) {
    this.initiative = this.router.getCurrentNavigation().extras.state.data;
    console.log(this.router.getCurrentNavigation().extras.state.data);
  }

  ngOnInit(): void {
    this.dataProfile();
  }

  dataProfile(): void {

    this.name = this.initiative.name;
    this.location = this.initiative.city + ' ' + this.initiative.state + ' ' + this.initiative.zip;
    this.date = this.initiative.date;
    this.theme = this.initiative.selectedTheme;

    if (this.initiative.gaolCreate !== undefined) {
      this.goals = 'Reduce energy costs';
    } else if (this.initiative.gaolFootprint !== undefined) {
      this.goals = 'Reduce energy footprint';
    } else if (this.initiative.gaolGreen !== undefined) {
      this.goals = 'Create/install green energy technology';
    } else if (this.initiative.gaolImprove !== undefined) {
      this.goals = 'Improve energy usage';
    } else if (this.initiative.gaolReduce !== undefined) {
      this.goals = 'Reduce energy costs';
    }

    if (this.initiative.gridRadios === 'option1') {
      this.challenges = this.challengesList[0];
    } else if (this.initiative.gridRadios2 === 'option2') {
      this.challenges = this.challengesList[1];
    } else if (this.initiative.gridRadios3 === 'option3') {
      this.challenges = this.challengesList[2];
    } else if (this.initiative.gridRadios4 === 'option4') {
      this.challenges = this.challengesList[3];
    }

    this.collaboration = this.initiative.collaboration;

    if (this.initiative.gridExpertise1 !== undefined && this.initiative.gridExpertise2 !== undefined
      && this.initiative.gridExpertise3 !== undefined) {
      this.expertise1 = 'example 1';
      this.expertise2 = 'example 2';
      this.expertise3 = 'example 3';
      this.expertiseCombined = this.expertise1 + ', ' + this.expertise2 + ', ' + this.expertise3;
    } else if (this.initiative.gridExpertise1 !== undefined && this.initiative.gridExpertise2 !== undefined) {
      this.expertise1 = 'example 1';
      this.expertise2 = 'example 2';
      this.expertiseCombined = this.expertise1 + ', ' + this.expertise2;
    } else if (this.initiative.gridExpertise1 !== undefined && this.initiative.gridExpertise3 !== undefined) {
      this.expertise1 = 'example 1';
      this.expertise3 = 'example 3';
      this.expertiseCombined = this.expertise1 + ', ' + this.expertise3;
    } else if (this.initiative.gridExpertise2 !== undefined && this.initiative.gridExpertise3 !== undefined) {
      this.expertise2 = 'example 2';
      this.expertise3 = 'example 3';
      this.expertiseCombined = this.expertise2 + ', ' + this.expertise3;
    } else if (this.initiative.gridExpertise1 !== undefined) {
      this.expertise1 = 'example 1';
      this.expertiseCombined = this.expertise1;
    } else if (this.initiative.gridExpertise2 !== undefined) {
      this.expertise2 = 'example 2';
      this.expertiseCombined = this.expertise2;
    } else if (this.initiative.gridExpertise3 !== undefined) {
      this.expertise3 = 'example 3';
      this.expertiseCombined = this.expertise3;
    }

    this.email = this.initiative.inputEmail;
    this.website = this.initiative.inputWebsite;
    this.number = this.initiative.inputPhone;
  }

}
