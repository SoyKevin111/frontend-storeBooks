import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomersService } from "../customers.service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { createCustomer, createCustomerSuccess, deleteCustomer, deleteCustomerFailure, deleteCustomerSuccess, editCustomer, editCustomerSuccess, loadCustomers, loadCustomersFailure, loadCustomersSuccess } from "./customer.actions";
import { NotificationCreateSuccess, NotificationEditSuccess } from "../../../shared/store/notification.actions";


@Injectable()
export class CustomersEffects {

	private actions$ = inject(Actions);
	private customersService = inject(CustomersService);

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

	createCustomer$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createCustomer),
			switchMap(({ newCustomer }) =>
				this.customersService.create(newCustomer).pipe(
					switchMap((createdCustomer) =>
						of(
							createCustomerSuccess({ newCustomer: createdCustomer }),
							NotificationCreateSuccess()
						)
					),
					catchError((error) => of(loadCustomersFailure({ error })))
				)
			)
		)
	);


	updateCustomer$ = createEffect(() =>
		this.actions$.pipe(
			ofType(editCustomer),
			switchMap(({ editedCustomer }) =>
				this.customersService.update(editedCustomer, editedCustomer.id).pipe(
					switchMap((updatedCustomer) => {
						return of(
							editCustomerSuccess({ editedCustomer: updatedCustomer }),
							NotificationEditSuccess()
						);
					}),
					catchError((error) => of(loadCustomersFailure({ error })))
				)
			)
		)
	);


	deleteCustomer$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(deleteCustomer),
				switchMap(({ id }) => {
					return this.customersService.delete(id)
						.pipe(
							map(() => deleteCustomerSuccess({ id })),
							catchError((error) => of(deleteCustomerFailure({ error })))
						)
				}
				)
			)
	);

}