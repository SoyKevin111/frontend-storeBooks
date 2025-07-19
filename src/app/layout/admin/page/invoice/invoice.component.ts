import { Component, inject } from '@angular/core';
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
