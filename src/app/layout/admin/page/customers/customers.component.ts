import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { Customer } from '../../../../shared/models/customer.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormCustomerComponent } from '../../components/form-customer/form-customer.component';
import { ModalConfirmationService } from '../../../../shared/services/modal-confirmation.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCustomers } from '../../../../features/customers/store/customer.actions';
import { loadCustomersSelector } from '../../../../features/customers/store/customer.selectors';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  private subscription: Subscription = new Subscription();

  customers$: Customer[] = [];

  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'dateOfBirth', header: 'Date of Birth' },
    { field: 'identityNumber', header: 'Identification number' },
    { field: 'address', header: 'Address' },
    { field: 'phone', header: 'Phone' },
    { field: 'state', header: 'State' }
  ];

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());

    const sub = this.store.select(loadCustomersSelector).subscribe(customers => {
      this.customers$ = customers;
    });

    this.subscription.add(sub);
  }

  createCustomer() {
    this.modalService.open(FormCustomerComponent, { functionTyeEm: 'create' });
    console.log('Create customer clicked');
  }

  editCustomer(customer: Customer) {
    this.modalService.open(FormCustomerComponent, { functionTyeEm: 'update', customer });
    console.log('Edit:', customer);
  }

  deleteCustomer(customer: any) {
    this.modalConfirmationService.deleteBook('Customer');
    console.log('Delete:', customer);
  }

  viewCustomer(customer: any) {
    console.log('View:', customer);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
