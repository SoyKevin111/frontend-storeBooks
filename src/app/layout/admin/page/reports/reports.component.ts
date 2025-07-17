import { Component } from '@angular/core';
import { MonthySalesComponent } from '../../components/reports/monthy-sales/monthy-sales.component';
import { LowRotationBooksComponent } from '../../components/reports/low-rotation-books/low-rotation-books.component';
import { BestsellersByCategoryComponent } from '../../components/reports/bestsellers-by-category/bestsellers-by-category.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [MonthySalesComponent, LowRotationBooksComponent, BestsellersByCategoryComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
