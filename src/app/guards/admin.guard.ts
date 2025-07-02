import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EventEmitterService } from '../features/services/event-emitter.service';


export const adminGuard: CanActivateFn = () => {
  const auth = inject(EventEmitterService);
  const router = inject(Router);

  return true;
};
