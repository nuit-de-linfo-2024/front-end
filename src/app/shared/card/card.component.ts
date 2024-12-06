import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Result } from '../../models/result.dto';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  result: Result = {
    id: 1,
    pointsNumber: 10
  };

  

  ngOnInit() {
    this.localStorageService.setItem(, this.result);
  }
}
