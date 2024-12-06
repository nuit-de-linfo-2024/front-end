import { Injectable } from '@angular/core';
import { QuestionScore } from '../models/question-score.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    private localStorageKey = 'questionScores';
    private totalScoreSubject = new BehaviorSubject<number>(0);

    totalScore$ = this.totalScoreSubject.asObservable();

    constructor() {
        const initialTotalScore = this.getTotalScoreFromStorage();
        this.totalScoreSubject.next(initialTotalScore);
    }

    saveScore(questionScore: QuestionScore): void {
        let scores: QuestionScore[] = this.getScores();
        const index = scores.findIndex(s => s.questionId === questionScore.questionId);

        if (index >= 0) {
            scores[index].score = questionScore.score;
        } else {
            scores.push(questionScore); 
        }

        localStorage.setItem(this.localStorageKey, JSON.stringify(scores));
        this.updateTotalScore();
    }

    getScores(): QuestionScore[] {
        const scores = localStorage.getItem(this.localStorageKey);
        return scores ? JSON.parse(scores) : [];
    }

    private getTotalScoreFromStorage(): number {
        const scores = this.getScores();
        return scores.reduce((total, score) => total + score.score, 0);
    }

    private updateTotalScore(): void {
        const newTotalScore = this.getTotalScoreFromStorage();
        this.totalScoreSubject.next(newTotalScore);
    }
}