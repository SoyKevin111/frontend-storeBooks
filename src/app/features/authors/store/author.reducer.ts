import { createReducer, on } from "@ngrx/store";
import { Author } from "../../../shared/models/author.model";
import {
	createAuthorSuccess,
	deleteAuthorSuccess,
	editAuthorSuccess,
	loadAuthorsSuccess
} from "./author.actions";

const authors: Author[] = [];

export interface State {
	authors: Author[];
}

export const initialState: State = {
	authors
};

export const authorsReducer = createReducer(
	initialState,

	on(loadAuthorsSuccess, (state, { items: authors }) => {
		return { ...state, authors };
	}),

	on(createAuthorSuccess, (state, { newItem: newAuthor }) => {
		return { ...state, authors: [...state.authors, newAuthor] };
	}),

	on(editAuthorSuccess, (state, { editedItem: editedAuthor }) => {
		return {
			...state,
			authors: state.authors.map(a =>
				a.id === editedAuthor.id ? editedAuthor : a
			)
		};
	}),

	on(deleteAuthorSuccess, (state, { id }) => {
		return {
			...state,
			authors: state.authors.filter(a => a.id !== id)
		};
	})
);
