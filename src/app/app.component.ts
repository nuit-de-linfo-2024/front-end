import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import { SandboxComponent } from "./sandbox/sandbox.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SandboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nuitdelinfo';
}
