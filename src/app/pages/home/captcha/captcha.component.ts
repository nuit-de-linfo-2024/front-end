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
  randomOceanOrSea: string = "";
  selectedOcean: string = '';
  selectedOceanObject?: CaptchaDTO | undefined;
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
    this.randomOceanOrSea = this.oceansAndSeas[randomIndex].nom;
    console.log(this.randomOceanOrSea)
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

      if (this.selectedOcean === this.randomOceanOrSea) {
        // this.router.navigate(['home']).then(() => this.toasterService.success("tu as trouvé"));
        return
      }
      else{
        this.addOceanToList()

    }

}
}

