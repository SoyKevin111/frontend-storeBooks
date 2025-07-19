import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../features/auth/authentication.service';


export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);


  if (authService.isSessionActive()) {
    return true;
  }
  else {
    authService.logout();
    router.navigate(['login']);
    return false;
  }
};
