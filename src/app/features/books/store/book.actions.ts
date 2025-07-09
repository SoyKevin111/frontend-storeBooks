import { createAction, props } from '@ngrx/store';
import { Book } from '../../../shared/models/book.model';

// Load
export const loadBooks = createAction('[book] load books');
export const loadBooksSuccess = createAction(
	'[book] load books success',
	props<{ items: Book[] }>()
);

// Create
export const createBook = createAction(
	'[book] create book',
	props<{ newItem: Book }>()
);
export const createBookSuccess = createAction(
	'[book] create book success',
	props<{ newItem: Book }>()
);

// Edit
export const editBook = createAction(
	'[book] edit book',
	props<{ editedItem: Book }>()
);
export const editBookSuccess = createAction(
	'[book] edit book success',
	props<{ editedItem: Book }>()
);

// Delete
export const deleteBook = createAction(
	'[book] delete book',
	props<{ id: number }>()
);
export const deleteBookSuccess = createAction(
	'[book] delete book success',
	props<{ id: number }>()
);
