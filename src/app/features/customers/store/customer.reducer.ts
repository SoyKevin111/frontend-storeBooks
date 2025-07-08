import { createReducer, on } from "@ngrx/store";
import { Customer } from "../../../shared/models/customer.model";
import { createCustomerSuccess, deleteCustomerSuccess, editCustomerSuccess, loadCustomersSuccess } from "./customer.actions";


const customers: Customer[] = [];

export interface State {
	customers: Customer[]
}

export const initialState: State = {
	customers
}


export const customersReducer = createReducer(
	initialState,

	on(loadCustomersSuccess, (state, { items: customers }) => {
		return { ...state, customers }
	}),

	on(createCustomerSuccess, (state, { newItem: newCustomer }) => {
		return { ...state, customers: [...state.customers, newCustomer] }
	}),

	on(editCustomerSuccess, (state, { editedItem: editedCustomer }) => {
		return {
			...state,
			customers: state.customers.map(c => c.id === editedCustomer.id ? editedCustomer : c)
		}
	}),
	on(deleteCustomerSuccess, (state, { id }) => {
		return {
			...state,
			customers: state.customers.filter(c => c.id !== id)
		}
	})


)