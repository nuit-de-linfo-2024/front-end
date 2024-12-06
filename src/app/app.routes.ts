import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {PodcastsComponent} from './pages/podcasts/podcasts.component';
import {SandboxComponent} from './sandbox/sandbox.component';
import {CaptchaComponent} from './pages/captcha/captcha.component';
import {capchatGuard} from './guards/capchat.guard';
import {BrainfuckComponent} from './brainfuck/brainfuck.component';

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
    path: "podcasts",
    component: PodcastsComponent,
    canActivate: [capchatGuard]
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'ergonomique',
    component: BrainfuckComponent
  },
  {
    path: 'capchat',
    component: CaptchaComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

