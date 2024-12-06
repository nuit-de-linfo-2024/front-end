import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Podcast} from '../../../models/podcast';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-podcast-card',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './podcast-card.component.html',
  styleUrl: './podcast-card.component.scss'
})
export class PodcastCardComponent implements AfterViewInit {
  @Input() podcast!: Podcast;

  @ViewChild('progressBar') progressBar!: ElementRef;
  @ViewChild('audioElement') audioElement!: ElementRef;

  progress = 0.0;
  isPlaying = false;

  audioContext: AudioContext | null = null;

  tooglePlay() {
    if (this.isPlaying) {
      this.audioElement.nativeElement.pause()
      this.isPlaying = false;

    } else {
      this.audioElement.nativeElement.play()
        .then(() => {
          this.isPlaying = true;
        })
    }
  }

  getFormatedDuration(): string {
    let mins = Math.floor(this.podcast.duration/60) + "";
    let secs = this.podcast.duration%60 + "";

    if (secs.length == 1) {
      secs = "0" + secs;
    }
    return `${mins}:${secs}`
  }

  ngAfterViewInit() {
    this.audioContext = new AudioContext();
    const track = this.audioContext.createMediaElementSource(this.audioElement.nativeElement)
    track.connect(this.audioContext.destination);

    this.audioElement.nativeElement.ontimeupdate = () => {
      this.progress = this.audioElement.nativeElement.currentTime;
    }

    this.progressBar.nativeElement.onclick = () => {
      this.progress = Number(this.progressBar.nativeElement.value)
      this.audioElement.nativeElement.fastSeek(this.progress)
    }
  }
}
