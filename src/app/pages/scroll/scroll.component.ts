import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {BodyZoomComponent} from '../../components/body-zoom/body-zoom.component';

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
    y_pos_percent : 7.9,
    x_min_camera_percent : 25.5,
    y_min_camera_percent : 13.1,
  },
  {
    x_pos_percent : 86.1,
    y_pos_percent : 52.5,
    x_min_camera_percent : 16.45,
    y_min_camera_percent : 10.8,
  },
  {
    x_pos_percent : 50,
    y_pos_percent : 50,
    x_min_camera_percent : 10,
    y_min_camera_percent : 10,
  },
  {
    x_pos_percent : 20,
    y_pos_percent : 95,
    x_min_camera_percent : 10,
    y_min_camera_percent : 10,
  },
]

@Component({
  selector: 'app-scroll',
  imports: [
    NgStyle,
    BodyZoomComponent,
  ],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent{
  private sroll_level: number = 0;

  protected index = 0;

  nextElement(){
    this.index += 1;
    this.index %= StateList.length;
  }

  previousElement(){
    this.index -= 1;
    this.index %= StateList.length;
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
