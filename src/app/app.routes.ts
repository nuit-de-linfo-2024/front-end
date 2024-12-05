import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {disconnectedGuard} from './guards/disconnected.guard';
import {NotFoundComponent} from './shared/not-found/not-found.component';

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
    path: 'login',
    component: LoginComponent,
    canActivate: [disconnectedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

