import { Component } from '@angular/core';
import { LowRotationBooks } from '../../../../../shared/models/reports.models';
import { mockLowRotationBooks } from '../../../../../features/mocks/reports-data.mock';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';

@Component({
  selector: 'app-low-rotation-books',
  standalone: true,
  imports: [ReportsTableComponent],
  templateUrl: './low-rotation-books.component.html',
  styleUrl: './low-rotation-books.component.scss'
})
export class LowRotationBooksComponent {

  columns = [
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    { field: 'authors', header: 'Authors' },
    { field: 'sales', header: 'Sales' },
    { field: 'lastSold', header: 'Last Sold' }
  ]

  data$: LowRotationBooks[] = mockLowRotationBooks;

}
