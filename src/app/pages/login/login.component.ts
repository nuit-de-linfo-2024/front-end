import { Component } from '@angular/core';
import {UserLoginDto} from '../../models/user.dto';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginRequest: UserLoginDto = {email: '', password: ''};

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }


  public login() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        this.toastr.success('Login successful');
        this.router.navigate(['/home']);
      },
      error: (err) => this.toastr.error(err.error.message)
    });
  }

}
