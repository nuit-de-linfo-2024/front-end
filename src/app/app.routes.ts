import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {PodcastsComponent} from './pages/podcasts/podcasts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: "podcast",
    component: PodcastsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

