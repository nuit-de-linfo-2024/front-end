import { Component, Input, OnInit } from '@angular/core';
import { CardDto } from '../../models/card.dto';
import { trigger, state, style, transition, animate } from '@angular/animations';
import cardData from './cards_data.json';
import { SandboxComponent } from '../sandbox.component';

@Component({
  selector: 'app-card-test',
  imports: [],
  templateUrl: './card.component.html',
  standalone: true,
  styleUrl: './card.component.scss',
})
export class CardComponent{
  public isFlipped: boolean = false;
  @Input() mockData: CardDto | undefined;
  @Input() selectedDifficulty: string |undefined;
  changeFlipState(){
    this.isFlipped = !this.isFlipped;
  }
  
  
  
  
  
}
