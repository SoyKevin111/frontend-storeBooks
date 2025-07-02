import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { Invoice } from '../../../../shared/models/invoice.model';
import { MOCK_INVOICES } from '../../../../features/mocks/invoice-data.mocks';
import { FormInvoiceComponent } from '../../components/form-invoice/form-invoice.component';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormInvoiceComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

  private router = inject(Router)


  invoices: Invoice[] = MOCK_INVOICES.map((invoice) => {
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
