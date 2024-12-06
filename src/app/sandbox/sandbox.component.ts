import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import cardData from './card/cards_data.json';
import { FormsModule } from '@angular/forms';
import { ScoreService } from '../services/score.service';

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

  totalScore: number = 0;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
      this.scoreService.totalScore$.subscribe(score => {
          this.totalScore = score;
      });
  }

  onDifficultyChange(difficulty: string){
    this.selectedDifficulty = difficulty;
  }


}