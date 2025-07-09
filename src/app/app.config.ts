import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { customersReducer } from './features/customers/store/customer.reducer';
import { CustomersEffects } from './features/customers/store/customers.effects';
import { provideHttpClient } from '@angular/common/http';
import { NotificationEffects } from './shared/store/notification.effects';
import { editorialsReducer } from './features/editorials/store/editorial.reducer';
import { EditorialsEffects } from './features/editorials/store/editorial.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ReactiveFormsModule,
    provideStore({ customers: customersReducer, editorials: editorialsReducer }),
    provideEffects([
      CustomersEffects,
      EditorialsEffects,
      NotificationEffects,
    ])]
};
