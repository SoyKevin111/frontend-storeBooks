import { Routes } from "@angular/router";

export const CUSTOMER_ROUTES: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'home'
			},
			{
				path: 'home',
				loadComponent: () => import('../customer/page/home/home.component').then(m => m.HomeComponent)
			},
			{
				path: 'store',
				loadComponent: () => import('../customer/page/store/store.component').then(m => m.StoreComponent)
			}
		]
	}

];