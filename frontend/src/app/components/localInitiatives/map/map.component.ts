import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;

  constructor() {};

  ngOnInit() {
    this.renderMap();
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 52.370216, lng: 4.895168},
      zoom: 8
    });

    var marker = new window['google'].maps.Marker({
      position: {lat: 52.370216, lng: 4.895168},
      map: map,
      title: 'Local Initiative',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="thirdHeading" class="thirdHeading">Local Initiative</h3>'+
      '<div id="bodyContent">'+
      '<p>Information will be displayed here</p>'+
      '</div>'+
      '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();
    }
    if(!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzfVzdH_CJuh0iTGrmw69Sal9ZWDkT69w&callback=initMap";

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

  onClickSubmit(addForm: NgForm): void {
    console.log(addForm.value);
  }
}
