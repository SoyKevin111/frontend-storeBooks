import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { CrudActions, CrudService } from "./crud-effects.model";
import { NotificationCreateSuccess, NotificationEditSuccess } from "../store/notification.actions";

export function createCrudEffects<T>(
	actions$: Actions,
	service: CrudService<T>,
	actions: CrudActions<T>
) {

	const load$ = createEffect(() =>
		actions$.pipe(
			ofType(actions.load),
			switchMap(() =>
				service.findAll().pipe(
					map((items: T[]) => actions.loadSucess({ items }))
				)
			)
		)
	);

	const create$ = createEffect(() =>
		actions$.pipe(
			ofType(actions.create),
			switchMap(({ newItem }: { newItem: T }) =>
				service.create(newItem).pipe(
					switchMap((created: T) => of(
						actions.createSuccess({ newItem: created }),
						NotificationCreateSuccess()
					))
				)
			)
		)
	);

	const edit$ = createEffect(() =>
		actions$.pipe(
			ofType(actions.edit),
			switchMap(({ editedItem }: { editedItem: T & { id: number } }) =>
				service.update(editedItem, editedItem.id).pipe(
					switchMap((updated: T) => of(
						actions.editSuccess({ editedItem: updated }),
						NotificationEditSuccess()
					))
				)
			)
		)
	);

	const delete$ = createEffect(() =>
		actions$.pipe(
			ofType(actions.delete),
			switchMap(({ id }: { id: number }) =>
				service.delete(id).pipe(
					map(() => actions.deleteSuccess({ id }))
				)
			)
		)
	);

	return { load$, create$, edit$, delete$ };

}