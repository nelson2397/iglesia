import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataWordPressService } from 'src/app/services/data-word-press.service';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.scss'],
})
export class MisionComponent implements OnInit, AfterViewInit {

  wpMision: any;

  lat: number;
  long: number;

  constructor( private DataServices: DataWordPressService) {}
  ngAfterViewInit(): void {
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   this.lat = pos.coords.latitude;
    //   this.long = pos.coords.longitude;
    // });
      let mymap = L.map('mapid', {
        center: [3.396174807425678, -76.50570026103468],
        zoom: 15
      });
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
        minZoom: 3
      });
      tiles.addTo(mymap);
      mymap.locate({
        enableHighAccuracy: true,
        setView: true,
        timeout: 5000
      })
      L.marker([3.396174807425678, -76.50570026103468]).addTo(mymap);
      
  }

  ngOnInit(): void {
    this.DataServices.GetMision('pages').subscribe(resp => {
      this.wpMision=resp;
    })
  }
}
