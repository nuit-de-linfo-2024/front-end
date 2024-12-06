import { Component, Input, OnInit } from '@angular/core';
import { CardDto, Question } from '../../models/card.dto';
import { QuestionScore } from '../../models/question-score.dto';
import { ScoreService } from '../../services/score.service';

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

  score: { [key: string]: number } = { 
    easy: 1,
    medium: 2,
    hard: 3
  };

  constructor(private scoreService: ScoreService) {}

  checkAnswer(question: Question, option: string){
    this.changeFlipState();

    if(question.answer === option){
      const questionScore: QuestionScore = { questionId: question.id, score: this.score[question.difficulty] };
      this.scoreService.saveScore(questionScore);
    }
  }
  changeFlipState(){
    this.isFlipped = !this.isFlipped;
  }
  
  
  
  
  
}
