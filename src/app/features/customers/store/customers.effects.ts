import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { CustomersService } from "../customers.service";
import { createCrudEffects } from "../../../shared/common/crud-effects.factory";
import { Customer } from "../../../shared/models/customer.model";
import { createCustomer, createCustomerSuccess, deleteCustomer, deleteCustomerSuccess, editCustomer, editCustomerSuccess, loadCustomers, loadCustomersSuccess } from "./customer.actions";


@Injectable()
export class CustomersEffects {

	private actions$ = inject(Actions);
	private customersService = inject(CustomersService);

	private crud = createCrudEffects<Customer>(
		this.actions$,
		this.customersService,
		{
			load: loadCustomers,
			loadSucess: ({ items }) => loadCustomersSuccess({ items }),

			create: createCustomer,
			createSuccess: ({ newItem }) => createCustomerSuccess({ newItem }),

			edit: editCustomer,
			editSuccess: ({ editedItem }) => editCustomerSuccess({ editedItem }),

			delete: deleteCustomer,
			deleteSuccess: ({ id }) => deleteCustomerSuccess({ id })
		}
	);

	loadCustomers$ = this.crud.load$;
	createCustomer$ = this.crud.create$;
	editCustomer$ = this.crud.edit$;
	deleteCustomer$ = this.crud.delete$;

}