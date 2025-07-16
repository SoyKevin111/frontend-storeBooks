import { Routes } from '@angular/router';
import { adminGuard } from '../../guards/admin.guard';

export const ADMIN_ROUTES: Routes = [

	{
		path: '',
		canActivateChild: [adminGuard],
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard'
			},
			{
				path: 'dashboard',
				loadComponent: () => import('./page/dashboard/dashboard.component').then(m => m.DashboardComponent)
			},
			{
				path: 'customers',
				loadComponent: () => import('./page/customers/customers.component').then(m => m.CustomersComponent)
			},
			{
				path: 'books',
				loadComponent: () => import('./page/books/books.component').then(m => m.BooksComponent)
			},
			{
				path: 'authors',
				loadComponent: () => import('./page/authors/authors.component').then(m => m.AuthorsComponent)
			},
			{
				path: 'editorials',
				loadComponent: () => import('./page/editorials/editorials.component').then(m => m.EditorialsComponent)
			},
			{
				path: 'invoices',
				loadComponent: () => import('../admin/page/invoice/invoice.component').then(m => m.InvoiceComponent)
			},
			{
				path: 'invoice-history',
				loadComponent: () => import('../admin/page/history/history.component').then(m => m.HistoryComponent)
			},
			{
				path: 'reports',
				loadComponent: () => import('../admin/page/reports/reports.component').then(m => m.ReportsComponent)
			}
		]
	}

];
