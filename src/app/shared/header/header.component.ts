import {Component, Input} from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  totalScore: number = 0;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
      this.scoreService.totalScore$.subscribe(score => {
          this.totalScore = score;
      });
  }
}
