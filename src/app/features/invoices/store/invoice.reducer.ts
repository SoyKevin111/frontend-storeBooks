import { createReducer, on } from '@ngrx/store';
import { Invoice } from '../../../shared/models/invoice.model';
import {
	loadInvoicesSuccess,
	createInvoiceSuccess
} from './invoice.actions';

export interface State {
	invoices: Invoice[];
}

export const initialState: State = {
	invoices: []
};

export const invoicesReducer = createReducer(
	initialState,

	on(loadInvoicesSuccess, (state, { items }) => ({
		...state,
		invoices: items
	})),

	on(createInvoiceSuccess, (state, { newItem }) => ({
		...state,
		invoices: [...state.invoices, newItem]
	}))
);
