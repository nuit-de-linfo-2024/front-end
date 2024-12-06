import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class CardComponent implements OnChanges {
  public isFlipped: boolean = false;
  @Input() mockData: CardDto | undefined;
  @Input() selectedDifficulty: string |undefined;

  score: { [key: string]: number } = {
    easy: 1,
    medium: 2,
    hard: 3
  };

  totalScore: number = 0;

  constructor(private scoreService: ScoreService, private toaster: ToastrService,) {}

  ngOnInit(): void {
    this.scoreService.totalScore$.subscribe(score => {
      if(score > 15){
        this.toaster.success('Tu as débloqué la médaille d\'or <img width="32" height="32" src="gold_medal.png"/>', '', { enableHtml: true});
      } else if(score > 10){
        this.toaster.success('Tu as débloqué la médaille d\'argent <img width="32" height="32" src="silver_medal.png"/>', '', { enableHtml: true});
      } else if (score > 5){
        this.toaster.success('Tu as débloqué la médaille de bronze <img width="32" height="32" src="bronze_medal.png"/>', '', { enableHtml: true});
      }
    });
  }

  checkAnswer(question: Question, option: string){
    this.changeFlipState();

    if(question.answer === option){
      const questionScore: QuestionScore = { questionId: question.id, score: this.score[question.difficulty] };
      this.toaster.success('Tu as gagné ' + this.score[question.difficulty] + ' points');
      this.scoreService.saveScore(questionScore);
    }
    else{
      this.toaster.error('Mauvaise réponse');
    }
  }
  changeFlipState(){
    this.isFlipped = !this.isFlipped;
  }

  ngOnChanges(changes: SimpleChanges) {
  }


}
