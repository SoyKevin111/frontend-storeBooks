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


}
