import { createAction, props } from "@ngrx/store";
import { Customer } from "../../../shared/models/customer.model";

export const loadCustomers = createAction(
	'',
	props<{ customers: Customer[] }>()
)