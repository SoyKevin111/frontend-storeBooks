import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Invoice } from '../../../../shared/models/invoice.model';
import { Router } from '@angular/router';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { MOCK_INVOICES_DATA } from '../../../../features/mocks/invoice-data.mocks';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadInvoicesSelector } from '../../../../features/invoices/store/invoice.selectors';
import { loadInvoices } from '../../../../features/invoices/store/invoice.actions';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit, OnDestroy {

  private router = inject(Router)
  private store = inject(Store);
  private suscription: Subscription = new Subscription();

  invoices$: Invoice[] = [];
  columns = [
    { field: 'numberInvoice', header: 'Nº' },
    { field: 'customerNames', header: 'Customer' },
    { field: 'createdAt', header: 'Date Created' },
    { field: 'state', header: 'Customer State' },
    { field: 'total', header: 'Total' }
  ];

  ngOnInit(): void {
    console.log('desdes load invoices');
    this.loadInvoices();
  }

  loadInvoices() {


    const sub = this.store.select(loadInvoicesSelector).subscribe(invoices => {
      if (invoices.length === 0) this.store.dispatch(loadInvoices());
      this.invoices$ = invoices.map((invoice) => {
        return {
          customerNames: `${invoice.customer.name} ${invoice.customer.lastName}`,
          state: 'Issued',
          ...invoice
        };
      });;
    });

    this.suscription.add(sub);
  }

  viewInvoice(invoice: any) {
    this.router.navigate(['/storebooks/invoice-details'], { state: { invoice } });
    console.log(invoice);
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
