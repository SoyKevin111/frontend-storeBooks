import { createAction, props } from '@ngrx/store';
import { Editorial } from '../../../shared/models/editorial.model';

// Load
export const loadEditorials = createAction('[editorial] load editorials');
export const loadEditorialsSuccess = createAction(
	'[editorial] load editorials success',
	props<{ items: Editorial[] }>()
);

// Create
export const createEditorial = createAction(
	'[editorial] create editorial',
	props<{ newItem: Editorial }>()
);
export const createEditorialSuccess = createAction(
	'[editorial] create editorial success',
	props<{ newItem: Editorial }>()
);

// Edit
export const editEditorial = createAction(
	'[editorial] edit editorial',
	props<{ editedItem: Editorial }>()
);
export const editEditorialSuccess = createAction(
	'[editorial] edit editorial success',
	props<{ editedItem: Editorial }>()
);

// Delete
export const deleteEditorial = createAction(
	'[editorial] delete editorial',
	props<{ id: number }>()
);

export const deleteEditorialSuccess = createAction(
	'[editorial] delete editorial success',
	props<{ id: number }>()
);
