import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {icon} from "leaflet";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private lats = this.route.snapshot.paramMap.get('lats');
  private ing = this.route.snapshot.paramMap.get('ing');
  private vals = this.route.snapshot.paramMap.get('libelle');
  private map :any;
  private initMap(): void {
    if(this.lats!=null && this.ing!=null && this.vals!=null){


    this.map = L.map('map', {
      center: [ Number(this.lats),Number(this.ing) ],
      zoom: 3,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    const mark = L.marker([ Number(this.lats),Number(this.ing) ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon-2x.png',
        iconRetinaUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })});

    tiles.addTo(this.map);
    mark.addTo(this.map);
  }
  }

  constructor(private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.initMap()
  }
}
