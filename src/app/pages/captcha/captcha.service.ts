import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaptchaDTO } from './captcha.dto';  // Importer le DTO

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  private jsonFilePath = 'data.json'; // Chemin vers le fichier JSON

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir les données JSON sous forme de tableau d'objets OceanDTO
  getOceansAndSeas(): Observable<CaptchaDTO[]> {
    return this.http.get<CaptchaDTO[]>(this.jsonFilePath);
  }
}
