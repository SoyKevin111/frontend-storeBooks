import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ADMIN_ROUTES } from './layout/admin/admin.routes';
import { CUSTOMER_ROUTES } from './layout/customer/customer.routes';
import { UnathorizedComponent } from './shared/components/unathorized/unathorized.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RedirectByRoleComponent } from './shared/components/redirect-by-role/redirect-by-role.component';

export const routes: Routes = [
	{
		path: 'storebooks',
		component: MainComponent,
		children: [
			{
				path: 'admin',
				children: ADMIN_ROUTES
			},
			{
				path: 'customer',
				children: CUSTOMER_ROUTES
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: '/redirect-by-role'
			}
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
	}
	,
	{
		path: 'redirect-by-role',
		component: RedirectByRoleComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}

];
