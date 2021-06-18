import {AfterViewInit, Component, OnInit} from '@angular/core';
import {VilleService} from "../../Controller/service/ville.service";
import {Ville} from "../../Controller/model/ville.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit{

  private val = this.route.snapshot.paramMap.get('id');
  constructor(private primengConfig: PrimeNGConfig,private location: Location,private villeService:VilleService ,private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.villeService.getAll();
    this.findby(this.val);
  }

  change():void{
    this.router.navigateByUrl('/espaceVert');
  }
  findby(val:any):void{
    if(this.val!=null)
    this.villeService.findByDepartement(this.val);
  }
  get villeBydept(): Array<Ville>  {
    return this.villeService.villeBydept;
  }
  get ville(): Array<Ville> {
    return this.villeService.ville
  }
  goBack() {
    this.location.back();
  }

 }
