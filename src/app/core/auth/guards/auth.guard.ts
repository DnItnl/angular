import { JwtHelperService } from '@auth0/angular-jwt';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';



export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  
  console.log('from authGuard: ',localStorage.getItem('nest-token'));
  
  
  // return inject(Router).createUrlTree(['/auth']); 
  return true;
};
