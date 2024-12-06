import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-brainfuck',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './brainfuck.component.html',
  standalone: true,
  styleUrl: './brainfuck.component.scss'
})
export class BrainfuckComponent {
  targetCode: string[] = ['1', '2', '3', '4'];
  userCode: string[] = [];
  buttons: string[] = [];
  positions: { x: number; y: number }[] = [];
  success: boolean = false;

  constructor() {
    this.resetButtons();
  }

  resetButtons(): void {
    this.buttons = ['1', '2', '3', '4'];
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
    if (this.userCode.length < this.targetCode.length) {
      this.userCode.push(value); 

      if (this.userCode.join('') === this.targetCode.join('')) {
        this.success = true;
      } else {
        this.success = false;
      }

      this.randomizePositions();
    }
  }
}
