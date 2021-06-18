import { Component, OnInit } from '@angular/core';
import {EspaceVertService} from "../../Controller/service/espace-vert.service";
import {EspaceVertImage} from "../../Controller/model/espace-vert-image.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-espace-vert-detaill',
  templateUrl: './espace-vert-detaill.component.html',
  styleUrls: ['./espace-vert-detaill.component.css']
})
export class EspaceVertDetaillComponent implements OnInit {
   public  vals = this.route.snapshot.paramMap.get('libelle');
   public  ing= this.route.snapshot.paramMap.get('ing');
   public  lats= this.route.snapshot.paramMap.get('lats');
  constructor(private espaceVertService:EspaceVertService,private route: ActivatedRoute) { }
  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit(): void {
    this.loadExternalScript('../../../assets/js/scripts.js');
    if(this.vals!=null)
    this.getAllEspaceByLibelleImage(this.vals);
  }
  public getAllEspaceByLibelleImage(libelle:string){
    return this.espaceVertService.getAllEspaceByLibelleImage(libelle)
  }
  get espaceVertImage(): Array<EspaceVertImage> | undefined{
    return this.espaceVertService.espaceVertImage;
  }

}
