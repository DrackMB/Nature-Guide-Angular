export class Ville {
  public libelle: string;
  public lets: number;
  public ing: number;
  public etat: string

  constructor(libelle: string, lets: number, ing: number, etat: string) {
    this.libelle = libelle;
    this.lets = lets;
    this.ing = ing;
    this.etat = etat;
  }
}
