import { Component, inject } from '@angular/core';
import { Invoice } from '../../../../features/models/invoice.model';
import { Router } from '@angular/router';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { MOCK_INVOICES_CUSTOMER } from '../../../../features/mocks/invoice-customer-data.mock';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

    private router = inject(Router)
  
  
    invoices: Invoice[] = MOCK_INVOICES_CUSTOMER.map((invoice) => {
      return {
        customerNames: `${invoice.customer.name} ${invoice.customer.lastName}`,
        state: 'Issued',
        ...invoice
      };
    });
    columns = [
      { field: 'numberInvoice', header: 'Nº' },
      { field: 'customerNames', header: 'Customer' },
      { field: 'createdAt', header: 'Date Created' },
      { field: 'state', header: 'Customer State' },
      { field: 'total', header: 'Total' }
    ];
  
    viewInvoice(invoice: any) {
      this.router.navigate(['/storebooks/invoice-details'], { state: { invoice } });
      console.log(invoice);
    }
  

}
