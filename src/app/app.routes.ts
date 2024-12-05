import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import { SandboxComponent } from './sandbox/sandbox.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  }
  ,

  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

