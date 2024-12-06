import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


}
