import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { EditorialsService } from "../editorials.service";
import { createCrudEffects } from "../../../shared/common/crud-effects.factory";
import { Editorial } from "../../../shared/models/editorial.model";
import {
	createEditorial,
	createEditorialSuccess,
	deleteEditorial,
	deleteEditorialSuccess,
	editEditorial,
	editEditorialSuccess,
	loadEditorials,
	loadEditorialsSuccess
} from "./editorial.actions";

@Injectable()
export class EditorialsEffects {

	private actions$ = inject(Actions);
	private editorialsService = inject(EditorialsService);

	private crud = createCrudEffects<Editorial>(
		this.actions$,
		this.editorialsService,
		{
			load: loadEditorials,
			loadSucess: ({ items }) => loadEditorialsSuccess({ items }),

			create: createEditorial,
			createSuccess: ({ newItem }) => createEditorialSuccess({ newItem }),

			edit: editEditorial,
			editSuccess: ({ editedItem }) => editEditorialSuccess({ editedItem }),

			delete: deleteEditorial,
			deleteSuccess: ({ id }) => deleteEditorialSuccess({ id })
		}
	);

	loadEditorials$ = this.crud.load$;
	createEditorial$ = this.crud.create$;
	editEditorial$ = this.crud.edit$;
	deleteEditorial$ = this.crud.delete$;

}
