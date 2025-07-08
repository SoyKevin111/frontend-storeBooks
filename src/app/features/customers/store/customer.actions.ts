
import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../shared/models/customer.model';

// Load
export const loadCustomers = createAction('[customer] load customers');
export const loadCustomersSuccess = createAction(
	'[customer] load customers success',
	props<{ items: Customer[] }>()
);

// Create
export const createCustomer = createAction(
	'[customer] create customer',
	props<{ newItem: Customer }>()
);
export const createCustomerSuccess = createAction(
	'[customer] create customer success',
	props<{ newItem: Customer }>()
);

// Edit
export const editCustomer = createAction(
	'[customer] edit customer',
	props<{ editedItem: Customer }>() 
);
export const editCustomerSuccess = createAction(
	'[customer] edit customer success',
	props<{ editedItem: Customer }>()
);

// Delete
export const deleteCustomer = createAction(
	'[customer] delete customer',
	props<{ id: number }>()
);
export const deleteCustomerSuccess = createAction(
	'[customer] delete customer success',
	props<{ id: number }>()
);
