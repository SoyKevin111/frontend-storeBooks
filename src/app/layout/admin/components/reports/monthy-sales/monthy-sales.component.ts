import { Component } from '@angular/core';
import { mockMonthlySales } from '../../../../../features/mocks/reports-data.mock';
import { MonthlySales } from '../../../../../shared/models/reports.models';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';

@Component({
  selector: 'app-monthy-sales',
  standalone: true,
  imports: [ReportsTableComponent],
  templateUrl: './monthy-sales.component.html',
  styleUrl: './monthy-sales.component.scss'
})
export class MonthySalesComponent {

  columns = [
    { field: 'month', header: 'Month' },
    { field: 'sales', header: 'Sales' },
    { field: 'booksSold', header: 'Books Sold' }
  ]

  data$: MonthlySales[] = mockMonthlySales;


}
