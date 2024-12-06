import {Component, ElementRef, ViewChild} from '@angular/core';
import { CaptchaComponent } from "./captcha/captcha.component";

@Component({
  selector: 'app-home',
  imports: [CaptchaComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  playAudio(): void {
  }
}
