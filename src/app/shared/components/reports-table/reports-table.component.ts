import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reports-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.scss'
})
export class ReportsTableComponent {

  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];
  @Input() maxHeight: string = '620px';

}
