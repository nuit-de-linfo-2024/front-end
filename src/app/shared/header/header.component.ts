import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ERole} from '../../models/user.dto';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public isLogged = false;
  public isAdmin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authService.authStateChanged.subscribe((logged: boolean) => {
      this.isLogged = this.authService.isLoggedIn();
      this.isAdmin = this.authService.hasRole(ERole.ROLE_ADMIN);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }


  disconnect() {
    this.authService.logout();
  }
}
