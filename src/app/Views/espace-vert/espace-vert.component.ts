import {Component, OnInit, Renderer2} from '@angular/core';
import {EspaceVertService} from "../../Controller/service/espace-vert.service";
import {EspaceVert} from "../../Controller/model/espace-vert.model";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { Location } from '@angular/common';

@Component({
  selector: 'app-espace-vert',
  templateUrl: './espace-vert.component.html',
  styleUrls: ['./espace-vert.component.css']
})
export class EspaceVertComponent implements OnInit {
  public  vals = this.route.snapshot.paramMap;
  public url = "https://meteofrance.com/widget/prevision/"+this.vals.get('numVille');
  urlSafe: SafeResourceUrl | undefined;

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  constructor(private location: Location,private espaceVertService: EspaceVertService,private route: ActivatedRoute,private renderer: Renderer2,public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllEspaceByVilleLibelle(this.vals.get('id'));
    this.loadExternalScript('../../../assets/js/widget_v2.0.js');
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getAllEspaceByVilleLibelle(id:any):void {
    if(id!=null){
    this.espaceVertService.getAllEspaceByVilleLibelle(id);
  }
  }
  get espaceVert(): Array<EspaceVert> | undefined {
    return this.espaceVertService.espaceVert;
  }

  goBack() {
    this.location.back();
  }

}
