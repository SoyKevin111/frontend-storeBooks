import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./editorial.reducer";

export const selectEditorialsState = createFeatureSelector<State>('editorials');

export const loadEditorialsSelector = createSelector(
	selectEditorialsState,
	state => state.editorials
);
