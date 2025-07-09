import { createReducer, on } from "@ngrx/store";
import { Book } from "../../../shared/models/book.model";
import {
	createBookSuccess,
	deleteBookSuccess,
	editBookSuccess,
	loadBooksSuccess
} from "./book.actions";

const books: Book[] = [];

export interface State {
	books: Book[];
}

export const initialState: State = {
	books
};

export const booksReducer = createReducer(
	initialState,

	on(loadBooksSuccess, (state, { items: books }) => {
		return { ...state, books };
	}),

	on(createBookSuccess, (state, { newItem: newBook }) => {
		return { ...state, books: [...state.books, newBook] };
	}),

	on(editBookSuccess, (state, { editedItem: editedBook }) => {
		return {
			...state,
			books: state.books.map(b =>
				b.id === editedBook.id ? editedBook : b
			)
		};
	}),

	on(deleteBookSuccess, (state, { id }) => {
		return {
			...state,
			books: state.books.filter(b => b.id !== id)
		};
	})
);
