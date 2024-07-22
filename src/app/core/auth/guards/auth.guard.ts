import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';



export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  
  console.log(localStorage.getItem('nest_token'));
  
  
  // return inject(Router).createUrlTree(['/auth']); 
  return false;
};
