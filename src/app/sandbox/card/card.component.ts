import { Component, Input } from '@angular/core';
import { CardDto } from '../../models/card.dto';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card-test',
  imports: [],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public isFlipped: boolean = false;

  @Input() mockData: CardDto | undefined;

  changeFlipState(){
    this.isFlipped = !this.isFlipped;
  }
}
