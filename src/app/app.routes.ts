import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ADMIN_ROUTES } from './layout/admin/admin.routes';
import { UnathorizedComponent } from './shared/components/unathorized/unathorized.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'storebooks/admin/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadComponent: () => import('./layout/auth/login/login.component').then(m => m.LoginComponent)
	},
	{
		path: 'storebooks',
		component: MainComponent,
		children: [
			{
				path: 'admin',
				children: ADMIN_ROUTES
			},
		]
	},
	{
		path: 'storebooks/invoice-details',
		loadComponent: () => import('./shared/pages/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent)
	}
	,
	{
		path: 'unauthorized',
		component: UnathorizedComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}

];
