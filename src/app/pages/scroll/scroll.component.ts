import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {BodyZoomComponent} from '../../components/body-zoom/body-zoom.component';
import mockData from "../../sandbox/card/cards_data.json";
import {CardComponent} from "../../sandbox/card/card.component";
import {FormsModule} from "@angular/forms";
import cardData from "../../sandbox/card/cards_data.json";

export class ZoomState{
  x_pos_percent: number = 0;
  y_pos_percent: number = 0;
  x_min_camera_percent: number = 0;
  y_min_camera_percent: number = 0;
}

const StateList: ZoomState[] = [
  {
    x_pos_percent: 0,
    y_pos_percent : 0,
    x_min_camera_percent : 100,
    y_min_camera_percent : 100,
  },
  {
    x_pos_percent: 50,
    y_pos_percent : 24.5,
    x_min_camera_percent : 48.63,
    y_min_camera_percent : 17,
  },
  {
    x_pos_percent : 21.9,
    y_pos_percent : 29,
    x_min_camera_percent : 19.63,
    y_min_camera_percent : 12.86,
  },
  {
    x_pos_percent : 58.32,
    y_pos_percent : 26.27,
    x_min_camera_percent : 19.36,
    y_min_camera_percent : 6.78,
  },
  {
    x_pos_percent : 43.04,
    y_pos_percent : 34.29,
    x_min_camera_percent : 26.77,
    y_min_camera_percent : 8.13,
  },
  {
    x_pos_percent : 32.95,
    y_pos_percent : 79.84,
    x_min_camera_percent : 20.72,
    y_min_camera_percent : 13.85,
  },
  {
    x_pos_percent : 56.68,
    y_pos_percent : 36.57,
    x_min_camera_percent : 24.82,
    y_min_camera_percent : 8.95,
  },

]

@Component({
  selector: 'app-scroll',
  imports: [
    BodyZoomComponent,
    CardComponent,
    FormsModule,
  ],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent{
  selectedDifficulty: string='easy';
  mockData = cardData;

  protected begin: boolean = true;
  current_mock = mockData[0];

  onDifficultyChange(difficulty: string){
    this.selectedDifficulty = difficulty;
  }

  protected index = 0;

  nextElement(){
    this.index += 1;
    this.index %= StateList.length;
    this.current_mock = mockData[this.index];
    if (this.index === 0){
      this.begin = true;
    }else {
      this.begin = false;
      this.current_mock = mockData[this.index - 1];
    }
  }

  previousElement(){
    if (this.index === 0){
      return;
    }
    this.index -= 1;
    this.index %= StateList.length;
    if (this.index === 0){
      this.begin = true;
    }else {
      this.begin = false;
      this.current_mock = mockData[this.index - 1];
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("key pressed: " + event.key);
    switch (event.key) {
      case "ArrowLeft":
        this.previousElement();
        break;
      case "ArrowRight":
        this.nextElement();
        break;
      default:
        return;
    }
  }

  protected readonly StateList = StateList;
}
