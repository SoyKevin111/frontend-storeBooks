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
import { authorsReducer } from './features/authors/store/author.reducer';
import { AuthorsEffects } from './features/authors/store/author.effects';
import { BooksEffects, booksReducer } from './features/books/store';
import { invoicesReducer } from './features/invoices/store/invoice.reducer';
import { InvoicesEffects } from './features/invoices/store/invoice.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ReactiveFormsModule,
    provideStore({
      customers: customersReducer,
      editorials: editorialsReducer,
      authors: authorsReducer,
      books: booksReducer,
      invoices: invoicesReducer
    }),
    provideEffects([
      CustomersEffects,
      EditorialsEffects,
      AuthorsEffects,
      BooksEffects,
      InvoicesEffects,
      NotificationEffects,
    ])]
};
