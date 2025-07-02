import { createAction, props } from "@ngrx/store";

export const loadCustomers = createAction(
	'',
	props<{ customers: any[] }>()
)