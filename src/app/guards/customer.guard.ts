import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EventEmitterService } from '../features/services/event-emitter.service';

export const customerGuard: CanActivateFn = () => {

  const auth = inject(EventEmitterService);
  const router = inject(Router);
  const user = auth.getUser();

  if (user?.isCustomer) {
    return true;
  }

  return router.createUrlTree(['/unauthorized']);
};
