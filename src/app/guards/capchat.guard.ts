import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import {ToastrService} from 'ngx-toastr';

export const capchatGuard: CanActivateFn = (route, state) => {
  const capchatValidated = JSON.parse(localStorage.getItem('capchatValidated') || 'false');  console.log(capchatValidated);
  if (!capchatValidated) {
    inject(Router).navigate(['/capchat']);
    inject(ToastrService).error('You must validate the capchat');
    console.log("Your capchat is not validated");
    return false;
  }
  return true;
};
