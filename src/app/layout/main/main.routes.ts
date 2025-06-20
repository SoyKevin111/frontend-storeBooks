import { Routes } from '@angular/router';
import { adminGuard } from '../../guards/admin.guard';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main.component').then(m => m.MainComponent),
    canActivateChild: [adminGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../admin/page/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('../admin/page/customers/customers.component').then(m => m.CustomersComponent)
      },
      {
        path: 'books',
        loadComponent: () =>
          import('../admin/page/books/books.component').then(m => m.BooksComponent)
      },
      {
        path: 'editorials',
        loadComponent: () =>
          import('../admin/page/editorials/editorials.component').then(m => m.EditorialsComponent)
      },
      {
        path: 'authors',
        loadComponent: () =>
          import('../admin/page/authors/authors.component').then(m => m.AuthorsComponent)
      },
    ]
  }
];