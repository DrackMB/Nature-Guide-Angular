import { Component, OnInit } from '@angular/core';
import {EspaceVertService} from "../../../Controller/service/espace-vert.service";
import {EspaceVert} from "../../../Controller/model/espace-vert.model";
import {VilleService} from "../../../Controller/service/ville.service";
import {Ville} from "../../../Controller/model/ville.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-espace-vert-admin',
  templateUrl: './espace-vert-admin.component.html',
  styleUrls: ['./espace-vert-admin.component.css']
})
export class EspaceVertAdminComponent implements OnInit {

  constructor(private espaceVertService:EspaceVertService, private villeService:VilleService,private route: Router) { }

  ngOnInit(): void {
    this.villeService.getAll();
  }
  get ville(): Array<Ville>{
    return this.villeService.ville;
  }
  public addEspaceVert(espaceVert:EspaceVert){
    if(this.espaceVertService.addEspaceVert(espaceVert) != -1){
      this.route.navigate(["/accueil"]);
    }

  }
  get espaceVertadd(): EspaceVert{
    return <EspaceVert>this.espaceVertService.espaceVertadd;
  }

}
