import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CaptchaService } from './captcha.service'
import {CaptchaDTO} from './captcha.dto'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-captcha',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './captcha.component.html',
  standalone: true,
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent  {

  oceansAndSeas: CaptchaDTO[] = [];
  filteredOceans: CaptchaDTO[] = [];
  randomOceanOrSea: CaptchaDTO | undefined;
  selectedOcean: string = '';
  selectedOceans: CaptchaDTO[] = [];
  constructor(private captchaService: CaptchaService, private toasterService: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.captchaService.getOceansAndSeas().subscribe(data => {
      this.oceansAndSeas = data;
      this.filteredOceans = [...this.oceansAndSeas];
      this.getRandomOceanOrSea()
    });
  }


  getRandomOceanOrSea(): void {
    const randomIndex = Math.floor(Math.random() * this.oceansAndSeas.length);
    this.randomOceanOrSea = this.oceansAndSeas[randomIndex];
    console.log(this.randomOceanOrSea.nom)
    console.log(this.randomOceanOrSea.type)
  }

    addOceanToList(): void {
      if (this.selectedOcean) {

        const oceanToAdd = this.oceansAndSeas.find(ocean => ocean.nom === this.selectedOcean);

        if (oceanToAdd && !this.selectedOceans.some(ocean => ocean.nom === oceanToAdd.nom)) {
          this.selectedOceans.push(oceanToAdd);
        }
      }
    }

    VerifOcean(): void {

      this.addOceanToList()

      if (this.selectedOcean === this.randomOceanOrSea?.nom) {
        this.router.navigate(['home']).then(() => this.toasterService.success("tu as trouvé"));
        return
      }
  }

  getBackgroundClass(arr1: string[], arr2: string[]): string {
    if (this.areListsEqual(arr1, arr2)) {
      return 'bg-success'; // Tous les éléments sont identiques
    }

    const correctElements = arr1.filter(item => arr2.includes(item)).length;
    if (correctElements > 0) {
      return 'bg-warning'; // Certains éléments sont corrects
    }

    return 'bg-danger'; // Aucun élément n'est correct
  }

  // Méthode pour vérifier si les deux listes sont identiques
  areListsEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) {
      return false; // Si les longueurs diffèrent, les tableaux ne sont pas égaux
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // Si un élément ne correspond pas, les tableaux ne sont pas égaux
      }
    }

    return true; // Les tableaux sont égaux
  }

}

