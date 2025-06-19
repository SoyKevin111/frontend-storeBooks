import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadComponent: () => import('./layout/user/user.component').then(m => m.UserComponent)
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
