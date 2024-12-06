import { Component, OnInit } from '@angular/core';
import {CardDto} from '../models/card.dto';
import { CardComponent } from './card/card.component';
import cardData from './card/cards_data.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sandbox',
  imports: [CardComponent, FormsModule],
  templateUrl: './sandbox.component.html',
  standalone: true,
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent{
   selectedDifficulty: string='easy';
   mockData = cardData;



  onDifficultyChange(difficulty: string){
    this.selectedDifficulty = difficulty;
  }


}