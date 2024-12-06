// ocean.dto.ts
export class CaptchaDTO {
  nom: string;
  type: string;
  profondeur_max: string;
  etendue: string;
  continents: string[];

  constructor(nom: string, type: string, profondeur_max: string, etendue: string, continents: string[]) {
    this.nom = nom;
    this.type = type;
    this.profondeur_max = profondeur_max;
    this.etendue = etendue;
    this.continents = continents;
  }
}
