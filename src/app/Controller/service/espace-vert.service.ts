import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EspaceVert} from "../model/espace-vert.model";
import {Ville} from "../model/ville.model";
import {EspaceVertImage} from "../model/espace-vert-image.model";

@Injectable({
  providedIn: 'root'
})
export class EspaceVertService {

  private _espaceVert: Array<EspaceVert> | undefined;
  private _espaceVertadd: EspaceVert | undefined;
  private _espaceVertImage: Array<EspaceVertImage> | undefined;
  private url ='http://betterholday.php';
  constructor(private http:HttpClient) { }

  public getAllEspaceByVilleLibelle(libelle:string){
    this.http.get<Array<EspaceVert>>(this.url+'/findByVilleLibelle/'+libelle).subscribe(
      data => {

        this._espaceVert=data;
      },
      error=>{
        console.log(error);
      }

    )
  }
  public getAllEspaceByLibelleImage(libelle:string){
    this.http.get<Array<EspaceVertImage>>(this.url+'/findByEspaceVertImage/'+libelle).subscribe(
      data => {

        this._espaceVertImage=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }

    )
  }
  public addEspaceVert(espaceVert:EspaceVert):any{
    this.http.post(this.url+"/addEspaceVert",espaceVert).subscribe(
      data=>{
        return data;
      },error=>{
        console.log(error)
      }
    )
  }

  get espaceVert(): Array<EspaceVert> | undefined {
    return this._espaceVert;
  }

  set espaceVert(value: Array<EspaceVert> | undefined) {
    this._espaceVert = value;
  }

  get espaceVertImage(): Array<EspaceVertImage> | undefined {
    return this._espaceVertImage;
  }

  set espaceVertImage(value: Array<EspaceVertImage> | undefined) {
    this._espaceVertImage = value;
  }

  get espaceVertadd(): EspaceVert | undefined {
    if(this._espaceVertadd==null){
      this._espaceVertadd=new EspaceVert("",0,0,"","",new Ville(0,"",0,0,"","",0,""));
    }
    return <EspaceVert> this._espaceVertadd;
  }

  set espaceVertadd(value: EspaceVert | undefined) {
    this._espaceVertadd = value;
  }
}
