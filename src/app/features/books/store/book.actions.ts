import { createAction, props } from '@ngrx/store';
import { Book } from '../../../shared/models/book.model';
import { BookRequest } from '../../../shared/models/request/book-request.model';

// Load
export const loadBooks = createAction('[book] load books');
export const loadBooksSuccess = createAction(
	'[book] load books success',
	props<{ items: Book[] }>()
);
export const loadBooksFailure = createAction(
	'[book] load books failure',
	props<{ error: any }>()
);

// Create
export const createBook = createAction(
	'[book] create book',
	props<{ newItem: BookRequest }>()
);
export const createBookSuccess = createAction(
	'[book] create book success',
	props<{ newItem: Book }>()
);
export const createBookFailure = createAction(
	'[book] create book failure',
	props<{ error: any }>()
);

// Edit
export const editBook = createAction(
	'[book] edit book',
	props<{ editedItem: BookRequest }>()
);
export const editBookSuccess = createAction(
	'[book] edit book success',
	props<{ editedItem: Book }>()
);
export const editBookFailure = createAction(
	'[book] edit book failure',
	props<{ error: any }>()
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
export const deleteBookFailure = createAction(
	'[book] delete book failure',
	props<{ error: any }>()
);
