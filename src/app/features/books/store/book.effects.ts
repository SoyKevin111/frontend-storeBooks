import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { BooksService } from "../books.service";
import { createCrudEffects } from "../../../shared/common/crud-effects.factory";
import { Book } from "../../../shared/models/book.model";
import {
	createBook,
	createBookSuccess,
	deleteBook,
	deleteBookSuccess,
	editBook,
	editBookSuccess,
	loadBooks,
	loadBooksSuccess
} from "./book.actions";

@Injectable()
export class BooksEffects {

	private actions$ = inject(Actions);
	private booksService = inject(BooksService);

	private crud = createCrudEffects<Book>(
		this.actions$,
		this.booksService,
		{
			load: loadBooks,
			loadSucess: ({ items }) => loadBooksSuccess({ items }),

			create: createBook,
			createSuccess: ({ newItem }) => createBookSuccess({ newItem }),

			edit: editBook,
			editSuccess: ({ editedItem }) => editBookSuccess({ editedItem }),

			delete: deleteBook,
			deleteSuccess: ({ id }) => deleteBookSuccess({ id })
		}
	);

	loadBooks$ = this.crud.load$;
	createBook$ = this.crud.create$;
	editBook$ = this.crud.edit$;
	deleteBook$ = this.crud.delete$;
}
