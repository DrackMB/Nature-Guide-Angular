import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ville} from "../model/ville.model";

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private _ville: Array<Ville> | undefined;
  private url ='http://betterholday.php';
  constructor(private http:HttpClient) { }
  public getAll(){
    this.http.get<Array<Ville>>(this.url+'/getAllVille').subscribe(
      data => {
         this._ville=data;
      },
      error=>{
        console.log('kayen erooore fchi blassa');
    }

    )
  }


  get ville(): Array<Ville> {
    if(this._ville==null){
      this._ville=new Array<Ville>();
    }
    return this._ville;
  }

  set ville(value: Array<Ville>) {
    this._ville = value;
  }
}
