import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'storebooks',
		pathMatch: 'full'
	},
	{
		path: 'storebooks',
		loadChildren: () =>
			import('./layout/main/main.routes').then(m => m.MAIN_ROUTES)
	},
	{
		path: 'unauthorized',
		loadComponent: () =>
			import('./shared/components/unathorized/unathorized.component').then(
				(m) => m.UnathorizedComponent
			)
	},
	{
		path: '**',
		redirectTo: 'storebooks',
	}
];
