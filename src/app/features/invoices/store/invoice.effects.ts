import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
	createInvoice,
	createInvoiceSuccess,
	loadInvoices,
	loadInvoicesSuccess
} from './invoice.actions';
import { InvoicesService } from '../invoices.service';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class InvoicesEffects {
	private actions$ = inject(Actions);
	private invoicesService = inject(InvoicesService);

	loadInvoices$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadInvoices),
			switchMap(() =>
				this.invoicesService.findAll().pipe(
					map((items) => loadInvoicesSuccess({ items })),
					catchError((error) => {
						console.error('Error loading invoices:', error);
						return of();
					})
				)
			)
		)
	);

	createInvoice$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createInvoice),
			switchMap(({ newItem }) =>
				this.invoicesService.create(newItem).pipe(
					map((created) => createInvoiceSuccess({ newItem: created })),
					catchError((error) => {
						console.error('Error creating invoice:', error);
						return of();
					})
				)
			)
		)
	);
}
