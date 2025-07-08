import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createCustomerSuccess, editCustomerSuccess } from "../../features/customers/store/customer.actions";
import { inject, Injectable } from "@angular/core";
import { NotificationService } from "../services/notification.service";
import { tap } from "rxjs";
import { NotificationCreateSuccess, NotificationEditSuccess } from "./notification.actions";

@Injectable()
export class NotificationEffects {


	private actions$ = inject(Actions);
	private notificationService = inject(NotificationService);

	//Efectos
	successNotification$ = createEffect(
		() =>
			this.actions$
				.pipe(
					ofType(NotificationCreateSuccess, NotificationEditSuccess),
					tap(({ type }) => {
						switch (type) {
							case NotificationCreateSuccess.type:
								this.notificationService.showSuccess('CREATE');
								break;
							case NotificationEditSuccess.type:
								this.notificationService.showSuccess('UPDATE');
								break;
						}
					})
				), { dispatch: false }
	)

}