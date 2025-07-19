import { createAction, props } from '@ngrx/store';
import { Author } from '../../../shared/models/author.model';

// Load
export const loadAuthors = createAction('[author] load authors');
export const loadAuthorsSuccess = createAction(
	'[author] load authors success',
	props<{ items: Author[] }>()
);

// Create
export const createAuthor = createAction(
	'[author] create author',
	props<{ newItem: Author }>()
);
export const createAuthorSuccess = createAction(
	'[author] create author success',
	props<{ newItem: Author }>()
);

// Edit
export const editAuthor = createAction(
	'[author] edit author',
	props<{ editedItem: Author }>()
);
export const editAuthorSuccess = createAction(
	'[author] edit author success',
	props<{ editedItem: Author }>()
);

// Delete
export const deleteAuthor = createAction(
	'[author] delete author',
	props<{ id: number }>()
);

export const deleteAuthorSuccess = createAction(
	'[author] delete author success',
	props<{ id: number }>()
);
