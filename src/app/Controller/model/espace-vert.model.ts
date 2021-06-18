import {Ville} from "./ville.model";

export class EspaceVert {
  public libelle: string;
  public lets: number;
  public ing: number;
  public disciption: string;
  public image: string;
  public ville:Ville;

  constructor(libelle: string, lets: number, ing: number, disciption: string, image: string,ville:Ville) {
    this.libelle = libelle;
    this.lets = lets;
    this.ing = ing;
    this.disciption = disciption;
    this.image = image;
    this.ville = ville;
  }


}
