import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./author.reducer";

export const selectAuthorsState = createFeatureSelector<State>('authors');

export const loadAuthorsSelector = createSelector(
	selectAuthorsState,
	state => state.authors
);
