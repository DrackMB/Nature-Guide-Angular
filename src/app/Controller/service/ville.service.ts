import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ville} from "../model/ville.model";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private _ville: Array<Ville> | undefined;
  private _villeBydept: Array<Ville> | undefined;
  private _insertVille:Ville|undefined;

  private url ='http://betterholday.php';
  constructor(private http:HttpClient) { }
  public getAll(){
    this.http.get<Array<Ville>>(this.url+'/getAllVille').subscribe(
      data => {
         this._ville=data;
      },
      error=>{
        console.log('Errore Existe');
    }
    )
  }

  public findByDepartement(depar: string ){
    this.http.get<Array<Ville>>(this.url+'/findByDepart/'+depar).subscribe(
      data => {
        if(this._villeBydept!=null){
          this._villeBydept=data;
        }

        console.log(this._villeBydept?.length);
      },
      error=>{
        console.log('Errore Existe');
      }

    )
  }
  public addville(ville:Ville):any{
    this.http.post(this.url+"/addVille",ville).subscribe(
      data=>{
         return data;
      },error=>{
        console.log(error)
      }
    )
  }


  get insertVille(): Ville  {
    if(this._insertVille==null)
      this._insertVille=new Ville(0,"",0,0,"","",0,"");
    return <Ville>this._insertVille;
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

  get villeBydept(): Array<Ville>  {
    if(this._villeBydept==null){
      this._villeBydept=new Array<Ville>();
    }
    return this._villeBydept;
  }

  set villeBydept(value: Array<Ville>){
    this._villeBydept = value;
  }
}
