import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const capchatGuard: CanActivateFn = (route, state) => {
  const capchatValidated = localStorage.getItem('capchatValidated');
  if (!capchatValidated) {
    inject(Router).navigate(['/login']);
    console.log("Your capchat is not validated");
    return false;
  }
  return true;
};
