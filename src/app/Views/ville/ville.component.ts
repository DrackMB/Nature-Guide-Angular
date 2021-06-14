import { Component, OnInit } from '@angular/core';
import {VilleService} from "../../Controller/service/ville.service";
import {Ville} from "../../Controller/model/ville.model";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private villeService:VilleService) { }

  ngOnInit(): void {
    this.villeService.getAll();
  }
  get ville(): Array<Ville> {
    return this.villeService.ville
  }
 }
