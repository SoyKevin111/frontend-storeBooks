import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./book.reducer";

export const selectBooksState = createFeatureSelector<State>('books');

export const loadBooksSelector = createSelector(
	selectBooksState,
	state => state.books
);
