import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';

class ZoomState{
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
    y_pos_percent : 12,
    x_min_camera_percent : 10,
    y_min_camera_percent : 10,
  },
  {
    x_pos_percent : 90.5,
    y_pos_percent : 22.5,
    x_min_camera_percent : 10,
    y_min_camera_percent : 10,
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
  ],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent{
  private sroll_level: number = 0;

  private image_height: number = 1689;
  private image_width: number = 1307;

  private screen_height: number = 0;
  private screen_width: number = 0;

  private zoom_index: number = 0;

  OffsetCSS: string = "0px 0px";
  scaleCSS: string = "scale(100%) translate(0, 0)";

  screenHeightCSS: string = "0px";
  screenWidthCSS: string = "0px";

  constructor() {
    this.onResize();
    this.zoomOnPoint(0,0,100,100);
  }

  zoomOnPoint(x_pos_percent: number, y_pos_percent: number, x_min_camera_percent: number, y_min_camera_percent: number){

    // Convert input percentages into actual sizes
    let camera_x_min_size: number = (x_min_camera_percent / 100) * this.image_width;
    let camera_y_min_size: number = (y_min_camera_percent / 100) * this.image_height;

    console.log(camera_x_min_size + " " + camera_y_min_size)

    // Calculate the zoom ratios based on screen and image size
    let ratio_x: number = this.screen_width / camera_x_min_size;
    let ratio_y: number = this.screen_height / camera_y_min_size;

    // Use the smaller ratio to preserve aspect ratio
    let scale: number = Math.min(ratio_x, ratio_y);

    console.log(scale)

    // Calculate the target position on the image to zoom on
    let target_x: number = (x_pos_percent / 100) * (this.image_width);
    let target_y: number = (y_pos_percent / 100) * (this.image_height);

    // Calculate the offset to center the zoomed-in target point
    let x_pos_camera: number = (this.screen_width  / 2/scale) - target_x;
    let y_pos_camera: number = (this.screen_height / 2/scale) - target_y;
    console.log("camera: " + x_pos_camera + " " + y_pos_camera);

    x_pos_camera = x_pos_camera > 0 ? 0: x_pos_camera;
    y_pos_camera = y_pos_camera > 0 ? 0: y_pos_camera;

    this.OffsetCSS =  x_pos_camera + "px " + y_pos_camera + "px";

    this.scaleCSS = "scale(" + scale + ") translate(" + x_pos_camera + "px, " + y_pos_camera + "px)" ;
    console.log(this.scaleCSS)
  }

  nextElement(){
    this.zoom_index += 1;
    this.zoom_index %= StateList.length;
    this.updateFromState();
  }

  previousElement(){
    this.zoom_index -= 1;
    this.zoom_index %= StateList.length;
    this.updateFromState();
  }

  updateFromState(){
    this.zoomOnPoint(
      StateList[this.zoom_index].x_pos_percent,
      StateList[this.zoom_index].y_pos_percent,
      StateList[this.zoom_index].x_min_camera_percent,
      StateList[this.zoom_index].y_min_camera_percent,
    )
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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screen_height = window.innerHeight;
    this.screen_width = window.innerWidth;
    this.screenHeightCSS = this.screen_height + "px";
    this.screenWidthCSS = this.screen_width + "px";
    this.updateFromState();
    console.log(this.screenWidthCSS + " -- " + this.screenHeightCSS)
  }

  @ViewChild("img_scroll")
  img_scroll: ElementRef | undefined;

}
