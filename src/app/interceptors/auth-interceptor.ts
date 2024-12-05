import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const jwtToken = authService.getCurrentToken();
  const router = inject(Router);
  if (jwtToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken.token}`
      }
    });
  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
        router.navigate(['/login']).then(() => console.log("You are not connected"));
      }
      if (error.status === 403) {
        router.navigate(['/login']).then(() => console.log("You are not an admin"));
      }
      return throwError(() => error)
    })
  );
};

