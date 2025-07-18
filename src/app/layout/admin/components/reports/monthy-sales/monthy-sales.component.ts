import { Component, inject, OnInit } from '@angular/core';
import { mockMonthlySales } from '../../../../../features/mocks/reports-data.mock';
import { MonthlySales } from '../../../../../shared/models/reports.models';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';
import { ReportsService } from '../../../../../features/reports/reports.service';

@Component({
  selector: 'app-monthy-sales',
  standalone: true,
  imports: [ReportsTableComponent],
  templateUrl: './monthy-sales.component.html',
  styleUrl: './monthy-sales.component.scss'
})
export class MonthySalesComponent implements OnInit {

  private reportService = inject(ReportsService)

  columns = [
    { field: 'month', header: 'Month' },
    { field: 'sales', header: 'Sales' },
    { field: 'booksSold', header: 'Books Sold' }
  ]

  data$: MonthlySales[] = mockMonthlySales;

  ngOnInit(): void {
    this.reportService.getMontlySales().subscribe(data => this.data$ = data);
  }

}
