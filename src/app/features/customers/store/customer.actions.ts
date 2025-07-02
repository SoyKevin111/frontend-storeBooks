import { createAction, props } from "@ngrx/store";
import { Customer } from "../../../shared/models/customer.model";


//Load 
export const loadCustomers = createAction('[customer] load customers')

export const loadCustomersSuccess = createAction(
	'[customer] load customers success',
	props<{ customers: Customer[] }>()
)

export const loadCustomersFailure = createAction(
	'[customer] load customers failure',
	props<{ error: any }>()
)

//Create
export const createCustomer = createAction(
	'[customer] create customer',
	props<{ newCustomer: Customer }>()
)

export const createCustomerSuccess = createAction(
	'[customer] create customer success',
	props<{ newCustomer: Customer }>()
)

export const createCustomerFailure = createAction(
	'[customer] create customer failure',
	props<{ error: any }>()
)