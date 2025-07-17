import { Component } from '@angular/core';
import { MonthySalesComponent } from '../../components/reports/monthy-sales/monthy-sales.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [MonthySalesComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
