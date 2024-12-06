import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-brainfuck',
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './brainfuck.component.html',
  standalone: true,
  styleUrl: './brainfuck.component.scss'
})
export class BrainfuckComponent {
  userCode: string[] = [];
  buttons: string[] = [];
  positions: { x: number; y: number }[] = [];
  success: boolean = false;

  constructor() {
    this.resetButtons();
  }

  resetButtons(): void {
    this.buttons = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@._-".split("");
    this.randomizePositions();
  }

  // Génère des positions aléatoires pour les boutons
  randomizePositions(): void {
    this.positions = this.buttons.map(() => ({
      x: Math.random() * (window.innerWidth - 60),
      y: Math.random() * 250,
    }));
  }

  onButtonClick(value: string, index: number): void {
      this.userCode.push(value);

      this.randomizePositions();
    }
  
}
