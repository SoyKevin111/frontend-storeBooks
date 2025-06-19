import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'admin',
		pathMatch: 'full'
	},
	{
		path: 'admin',
		loadComponent: () => import('./layout/admin/admin.component').then(m => m.AdminComponent)
	},
	{
		path: 'user',
		loadComponent: () => import('./layout/user/user.component').then(m => m.UserComponent)
	},
	{
		path: '**',
		redirectTo: 'admin'
	}
];
