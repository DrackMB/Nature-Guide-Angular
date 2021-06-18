import { Component, OnInit } from '@angular/core';
import {VilleService} from "../../../Controller/service/ville.service";
import {Ville} from "../../../Controller/model/ville.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ville-admin',
  templateUrl: './ville-admin.component.html',
  styleUrls: ['./ville-admin.component.css']
})
export class VilleAdminComponent implements OnInit {

  constructor(private villeService:VilleService,private route: Router) { }

  ngOnInit(): void {
  }
  public addville(ville:Ville){
     if(this.villeService.addville(ville)!=-1){
       this.route.navigate(["/EspaceVertAdmine"])
     }
  }
  get insertVille(): Ville  {
    return this.villeService.insertVille;
  }
}
