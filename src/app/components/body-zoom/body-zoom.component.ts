import {OnChanges, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {ZoomState} from '../../pages/scroll/scroll.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-body-zoom',
  imports: [
    NgStyle
  ],
  templateUrl: './body-zoom.component.html',
  styleUrl: './body-zoom.component.scss'
})
export class BodyZoomComponent implements OnChanges {
  private image_height: number = 5264;
  private image_width: number = 2200;

  private screen_height: number = 0;
  private screen_width: number = 0;

  @Input() zoom_index: number = 0;
  @Input() zoom_state: ZoomState[] = []

  OffsetCSS: string = "0px 0px";
  scaleCSS: string = "scale(100%) translate(0, 0)";

  screenHeightCSS: string = "0px";
  screenWidthCSS: string = "0px";

  svgHeightCSS: string = "0px";
  svgWidthCSS: string = "0px";
  svgXpos: string = "0px";
  svgYpos: string = "0px";

  constructor() {
    this.onResize();
    this.updateFromState()
  }

  ngOnChanges(): void{
    this.updateFromState()
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

  updateFromState(){
    if (this.zoom_state.length === 0) {
      return;
    }

    this.zoomOnPoint(
      this.zoom_state[this.zoom_index].x_pos_percent,
      this.zoom_state[this.zoom_index].y_pos_percent,
      this.zoom_state[this.zoom_index].x_min_camera_percent,
      this.zoom_state[this.zoom_index].y_min_camera_percent,
    )
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screen_height = window.innerHeight;
    this.screen_width = window.innerWidth;

    if ((this.screen_height/this.screen_width) > 1) {
      // Vertical ratio
      this.screen_height /= 2;
    }else{
      // Horizontal screen
      this.screen_width /= 2;
    }

    this.screenHeightCSS = this.screen_height + "px";
    this.screenWidthCSS = this.screen_width + "px";

    this.svgHeightCSS = this.screen_height*0.6 + "px";
    this.svgWidthCSS = this.screen_height*0.6 + "px";
    this.svgXpos = (this.screen_width - this.screen_height*0.6)/2 + "px";
    this.svgYpos = (this.screen_height - this.screen_height*0.6)/2 + "px";

    this.updateFromState();
    console.log(this.screenWidthCSS + " -- " + this.screenHeightCSS)
  }

  @ViewChild("img_scroll")
  img_scroll: ElementRef | undefined;

}
