import { createAction, props } from "@ngrx/store";


export const NotificationCreateSuccess = createAction(
	'[shared] create success'
	//props<{ info: string }>()
)

export const NotificationEditSuccess = createAction(
	'[shared] edit success'
	//props<{ info: string }>()
)

export const catchErrorFailure = createAction(
	'[shared] catch error',
	props<{ error: any }>()
)