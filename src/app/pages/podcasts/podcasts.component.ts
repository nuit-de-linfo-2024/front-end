import { Component } from '@angular/core';
import datas from "./datas.json";
import {PodcastCardComponent} from './podcast-card/podcast-card.component';
import {Podcast} from '../../models/podcast';

@Component({
  selector: 'app-podcasts',
  imports: [
    PodcastCardComponent
  ],
  templateUrl: './podcasts.component.html',
  styleUrl: './podcasts.component.scss'
})
export class PodcastsComponent {
  protected podcasts: Podcast[] = datas.podcasts.reverse();
}
