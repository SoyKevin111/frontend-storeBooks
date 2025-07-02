import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./customer.reducer";


export const selectCustomersState = createFeatureSelector<State>('customers');

export const loadCustomersSelector = createSelector(
	selectCustomersState,
	state => state.customers
)