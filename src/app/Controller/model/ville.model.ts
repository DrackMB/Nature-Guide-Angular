export class Ville {
  public id:number;
  public libelle: string;
  public lets: number;
  public ing: number;
  public depart: string;
  public image: string;
  public numVille: number;
  public pollutionKey: string;

  constructor(id:number,libelle: string, lets: number, ing: number, depart: string,image: string,numVille: number,pollutionKey: string) {
    this.id = id;
    this.libelle = libelle;
    this.lets = lets;
    this.ing = ing;
    this.depart = depart;
    this.image=image;
    this.numVille=numVille;
    this.pollutionKey=pollutionKey;
  }
}
