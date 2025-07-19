import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockBestSellers } from '../../../../../features/mocks/reports-data.mock';
import { RandomColorEmojiService } from '../../../../../shared/services/random-color-emoji.service';
import { ReportsService } from '../../../../../features/reports/reports.service';
import { PdfGeneratorService } from '../../../../../shared/services/pdf-generator.service';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent implements OnInit {

  color = inject(RandomColorEmojiService);
  private reportService = inject(ReportsService)
  private pdfService = inject(PdfGeneratorService)

  data$ = mockBestSellers;

  ngOnInit(): void {
    this.reportService.getBestSellers().subscribe(data => this.data$ = data);
  }

  exportToPDF() {
    this.pdfService.exportBestSellers(this.data$);
  }

}
