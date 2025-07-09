import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "../books.service";
import {
	createBook,
	createBookSuccess,
	deleteBook,
	deleteBookFailure,
	deleteBookSuccess,
	editBook,
	editBookSuccess,
	loadBooks,
	loadBooksFailure,
	loadBooksSuccess
} from "./book.actions";
import {
	NotificationCreateSuccess,
	NotificationEditSuccess
} from "../../../shared/store/notification.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class BooksEffects {
	private actions$ = inject(Actions);
	private booksService = inject(BooksService);

	loadBooks$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadBooks),
			switchMap(() =>
				this.booksService.findAll().pipe(
					map((items) => loadBooksSuccess({ items })),
					catchError((error) => of(loadBooksFailure({ error })))
				)
			)
		)
	);

	createBook$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createBook),
			switchMap(({ newItem }) =>
				this.booksService.create(newItem).pipe(
					switchMap((createdBook) =>
						of(
							createBookSuccess({ newItem: createdBook }),
							NotificationCreateSuccess()
						)
					),
					catchError((error) => of(loadBooksFailure({ error })))
				)
			)
		)
	);

	updateBook$ = createEffect(() =>
		this.actions$.pipe(
			ofType(editBook),
			switchMap(({ editedItem }) =>
				this.booksService.update(editedItem, editedItem.id).pipe(
					switchMap((updatedBook) =>
						of(
							editBookSuccess({ editedItem: updatedBook }),
							NotificationEditSuccess()
						)
					),
					catchError((error) => of(loadBooksFailure({ error })))
				)
			)
		)
	);

	deleteBook$ = createEffect(() =>
		this.actions$.pipe(
			ofType(deleteBook),
			switchMap(({ id }) =>
				this.booksService.delete(id).pipe(
					map(() => deleteBookSuccess({ id })),
					catchError((error) => of(deleteBookFailure({ error })))
				)
			)
		)
	);
}
