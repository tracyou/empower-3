import { Component, ElementRef, ViewChild, OnInit, Input} from '@angular/core';
import {InitiativeService} from '../../../services/initiative.service';
import {Initiative} from '../../../models/initiative';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() city;
  @Input() state;
  @Input() zip;
  @Input() name;
  @Input() date;
  @Input() selectTheme;
  @Input() goalReduce;
  @Input() goalImprove;
  @Input() goalGreen;
  @Input() goalCreate;
  @Input() goalFootprint;
  @Input() gridRadios;
  @Input() gridRadios2;
  @Input() gridRadios3;
  @Input() gridRadios4;
  @Input() collaboration;
  @Input() gridExpertise1;
  @Input() gridExpertise2;
  @Input() gridExpertise3;
  @Input() inputEmail;
  @Input() inputWebsite;
  @Input() inputPhone;


  @ViewChild('mapRef', {static: true}) mapElement: ElementRef;


  constructor(private initiativeService: InitiativeService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.renderMap();
  }

  newInitiative(): Initiative {
    return new Initiative(0, this.city, this.state, this.zip, this.name, this.date, this.selectTheme, this.goalReduce, this.goalImprove,
      this.goalGreen, this.goalCreate, this.goalFootprint, this.gridRadios, this.gridRadios2, this.gridRadios3, this.gridRadios4,
      this.collaboration, this.gridExpertise1, this.gridExpertise2, this.gridExpertise3, this.inputEmail, this.inputWebsite,
      this.inputPhone);
  }

  loadMap = () => {
    const map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 52.370216, lng: 4.895168},
      zoom: 8
    });

    const marker = new window['google'].maps.Marker({
      position: {lat: 52.370216, lng: 4.895168},
      map,
      title: 'Local Initiative',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });

    const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h3 id="thirdHeading" class="thirdHeading">Local Initiative</h3>' +
      '<div id="bodyContent">' +
      '<p>Information will be displayed here</p>' +
      '</div>' +
      '</div>';

    const infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });

  }

  // tslint:disable-next-line:typedef
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();
    };
    if (!window.document.getElementById('google-map-script')) {
      const s = window.document.createElement('script');
      s.id = 'google-map-script';
      s.type = 'text/javascript';
      s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCzfVzdH_CJuh0iTGrmw69Sal9ZWDkT69w&callback=initMap';

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

  onClickSubmit(): void {
    const newInitiative = this.newInitiative();
    this.initiativeService.postInitiatative(newInitiative).subscribe(
      (response: Initiative) => {
        console.log(response);
        console.log(this.initiativeService.getInitiative());
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        alert('Something went wrong.');
      }
    );
  }
}
