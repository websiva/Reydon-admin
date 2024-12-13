import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router =Inject(Router);

  const isAuthenticated = true;
  if (!isAuthenticated) { 
    router.navigate(['/']); 
    return false; 
  } 
  return true;
};
