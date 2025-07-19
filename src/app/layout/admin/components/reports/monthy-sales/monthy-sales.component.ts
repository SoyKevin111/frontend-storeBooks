import { Component, inject, OnInit } from '@angular/core';
import { MonthlySales } from '../../../../../shared/models/reports.models';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';
import { ReportsService } from '../../../../../features/reports/reports.service';
import { PdfGeneratorService } from '../../../../../shared/services/pdf-generator.service';

@Component({
  selector: 'app-monthy-sales',
  standalone: true,
  imports: [ReportsTableComponent],
  templateUrl: './monthy-sales.component.html',
  styleUrl: './monthy-sales.component.scss'
})
export class MonthySalesComponent implements OnInit {

  private reportService = inject(ReportsService)
  private pdfService = inject(PdfGeneratorService);

  columns = [
    { field: 'month', header: 'Month' },
    { field: 'booksSold', header: 'Books Sold' },
    { field: 'sales', header: 'Total Sales' }
  ]

  data$: MonthlySales[] = [];

  ngOnInit(): void {
    this.reportService.getMontlySales().subscribe(data => this.data$ = data);
  }

  exportToPDF() {
    this.pdfService.exportMonthlySales(this.data$);
  }

}
