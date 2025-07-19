import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { AuthorsService } from "../authors.service";
import { createCrudEffects } from "../../../shared/common/crud-effects.factory";
import { Author } from "../../../shared/models/author.model";
import {
	createAuthor,
	createAuthorSuccess,
	deleteAuthor,
	deleteAuthorSuccess,
	editAuthor,
	editAuthorSuccess,
	loadAuthors,
	loadAuthorsSuccess
} from "./author.actions";

@Injectable()
export class AuthorsEffects {

	private actions$ = inject(Actions);
	private authorsService = inject(AuthorsService);

	private crud = createCrudEffects<Author>(
		this.actions$,
		this.authorsService,
		{
			load: loadAuthors,
			loadSucess: ({ items }) => loadAuthorsSuccess({ items }),

			create: createAuthor,
			createSuccess: ({ newItem }) => createAuthorSuccess({ newItem }),

			edit: editAuthor,
			editSuccess: ({ editedItem }) => editAuthorSuccess({ editedItem }),

			delete: deleteAuthor,
			deleteSuccess: ({ id }) => deleteAuthorSuccess({ id })
		}
	);

	loadAuthors$ = this.crud.load$;
	createAuthor$ = this.crud.create$;
	editAuthor$ = this.crud.edit$;
	deleteAuthor$ = this.crud.delete$;

}
