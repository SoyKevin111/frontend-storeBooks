import { Component, inject, OnInit } from '@angular/core';
import { mockBestSellersByCategory } from '../../../../../features/mocks/reports-data.mock';
import { BestSellersByCategory } from '../../../../../shared/models/reports.models';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';
import { KeyValuePipe } from '@angular/common';
import { ReportsService } from '../../../../../features/reports/reports.service';

@Component({
  selector: 'app-bestsellers-by-category',
  standalone: true,
  imports: [ReportsTableComponent, KeyValuePipe],
  templateUrl: './bestsellers-by-category.component.html',
  styleUrl: './bestsellers-by-category.component.scss'
})
export class BestsellersByCategoryComponent implements OnInit {

  columns = [
    { field: 'no', header: 'Nº' },
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    { field: 'authors', header: 'Authors' },
    { field: 'editorial', header: 'Editorial' },
    { field: 'price', header: 'Price' },
    { field: 'sales', header: 'Sales' },
    { field: 'category', header: 'Category' },
    { field: 'bestSeller', header: 'Best Seller' }
  ];

  data$: BestSellersByCategory[] = mockBestSellersByCategory;
  groupedData: { [category: string]: BestSellersByCategory[] } = {};

  private reportService = inject(ReportsService)

  ngOnInit(): void {
    this.reportService.getBestSellersByCategory().subscribe(data => {
      this.data$ = data;
      this.groupedBooksByCategory();
    });
  }

  groupedBooksByCategory(): void {
    const temp: { [category: string]: BestSellersByCategory[] } = {};

    for (const book of this.data$) {
      const category = book.category;
      if (!temp[category]) {
        temp[category] = [];
      }
      temp[category].push({ ...book });
    }
    for (const category in temp) {
      temp[category] = temp[category].map((book, index) => ({
        ...book,
        no: index + 1
      }));
    }

    this.groupedData = temp;
  }


}
