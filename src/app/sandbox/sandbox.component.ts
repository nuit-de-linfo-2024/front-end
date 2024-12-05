import { Component } from '@angular/core';
import {CardDto} from '../models/card.dto';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-sandbox',
  imports: [CardComponent],
  templateUrl: './sandbox.component.html',
  standalone: true,
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {

   mockData: CardDto[] = [
    {
      title: 'Question 1',
      description: 'This is the first question',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 'Option 1'
    },
    {
      title: 'Question 2',
      description: 'This is the second question',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: 'Option B'
    },
    {
      title: 'Question 3',
      description: 'This is the third question',
      options: ['True', 'False'],
      answer: 'True'
    }
  ];

}