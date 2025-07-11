import { createReducer, on } from "@ngrx/store";
import { Editorial } from "../../../shared/models/editorial.model";
import {
	createEditorialSuccess,
	deleteEditorialSuccess,
	editEditorialSuccess,
	loadEditorialsSuccess
} from "./editorial.actions";

const editorials: Editorial[] = [];

export interface State {
	editorials: Editorial[];
}

export const initialState: State = {
	editorials
};

export const editorialsReducer = createReducer(
	initialState,

	on(loadEditorialsSuccess, (state, { items: editorials }) => {
		return { ...state, editorials };
	}),

	on(createEditorialSuccess, (state, { newItem: newEditorial }) => {
		return { ...state, editorials: [...state.editorials, newEditorial] };
	}),

	on(editEditorialSuccess, (state, { editedItem: editedEditorial }) => {
		return {
			...state,
			editorials: state.editorials.map(e =>
				e.id === editedEditorial.id ? editedEditorial : e
			)
		};
	}),

	on(deleteEditorialSuccess, (state, { id }) => {
		return {
			...state,
			editorials: state.editorials.filter(e => e.id !== id)
		};
	})
);
