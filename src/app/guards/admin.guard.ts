import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EventEmitterService } from '../features/services/event-emitter.service';


export const adminGuard: CanActivateFn = () => {
  const auth = inject(EventEmitterService);
  const router = inject(Router);
  const user = auth.getUser();

  if (user?.isAdmin) {
    return true;
  }

  // ✅ Más seguro y compatible: retornar una redirección en vez de usar navigate()
  return router.createUrlTree(['/unauthorized']);
};
