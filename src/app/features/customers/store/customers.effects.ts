import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomersService } from "../customers.service";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { createCustomer, createCustomerSuccess, editCustomer, editCustomerSuccess, loadCustomers, loadCustomersFailure, loadCustomersSuccess } from "./customer.actions";


@Injectable()
export class CustomersEffects {

	private actions$ = inject(Actions);
	private customersService = inject(CustomersService);
	private store = inject(Store);

	loadCustomers$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadCustomers),
			switchMap(() =>
				this.customersService.findAll().pipe(
					map((customers) => loadCustomersSuccess({ customers })),
					catchError((error) => of(loadCustomersFailure({ error })))
				)
			)
		)
	);

	createCustomer$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(createCustomer),
				switchMap(({ newCustomer }) => {
					return this.customersService.create(newCustomer)
						.pipe(
							map((createdCustomer) => {
								return createCustomerSuccess({ newCustomer: createdCustomer });
							}),
							catchError((error) => of(loadCustomersFailure({ error })))
						)
				}

				)
			)
	)

	updateCustomer$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(editCustomer),
				switchMap(({ editedCustomer }) => {
					console.log('id', editedCustomer.id);
					
					return this.customersService.update(editedCustomer, editedCustomer.id)
						.pipe(
							map((updatedCustomer) => {
								return editCustomerSuccess({ editedCustomer: updatedCustomer });
							}),
							catchError((error) => of(loadCustomersFailure({ error })))
						)
				}
				)
			))


}