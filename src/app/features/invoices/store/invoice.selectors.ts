import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './invoice.reducer';

export const selectInvoicesState = createFeatureSelector<State>('invoices');

export const loadInvoicesSelector = createSelector(
	selectInvoicesState,
	(state) => state.invoices
);
