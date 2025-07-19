import { Component, inject, OnInit } from '@angular/core';
import { LowRotationBooks } from '../../../../../shared/models/reports.models';
import { ReportsTableComponent } from '../../../../../shared/components/reports-table/reports-table.component';
import { ReportsService } from '../../../../../features/reports/reports.service';
import { PdfGeneratorService } from '../../../../../shared/services/pdf-generator.service';

@Component({
  selector: 'app-low-rotation-books',
  standalone: true,
  imports: [ReportsTableComponent],
  templateUrl: './low-rotation-books.component.html',
  styleUrl: './low-rotation-books.component.scss'
})
export class LowRotationBooksComponent implements OnInit {

  columns = [
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    { field: 'authors', header: 'Authors' },
    { field: 'sales', header: 'Sales' },
    { field: 'lastSold', header: 'Last Sold' }
  ]

  private reportService = inject(ReportsService)
  private pdfService = inject(PdfGeneratorService)

  data$: LowRotationBooks[] = [];

  ngOnInit(): void {
    this.reportService.getLowRotationBooks().subscribe(data => this.data$ = data);
  }

  exportToPDF() {
    this.pdfService.exportLowRotationBooks(this.data$);
  }

}
