import { createReducer, on } from "@ngrx/store";
import { Customer } from "../../../shared/models/customer.model";
import { createCustomerSuccess, editCustomerSuccess, loadCustomersSuccess } from "./customer.actions";



export interface State {
	customers: Customer[]
}

export const initialState: State = {
	customers: []
}


export const customersReducer = createReducer(
	initialState,

	on(loadCustomersSuccess, (state, { customers }) => {
		return { ...state, customers }
	}),

	on(createCustomerSuccess, (state, { newCustomer }) => {
		return { ...state, customers: [...state.customers, newCustomer] }
	}),

	on(editCustomerSuccess, (state, { editedCustomer }) => {
		return {
			...state,
			customers: state.customers.map(c => c.id === editedCustomer.id ? editedCustomer : c)
		}
	}),


)