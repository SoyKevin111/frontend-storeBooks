import { Component, inject, Input } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { MOCK_CUSTOMERS } from '../../../../features/mocks/customers-data.mock';
import { User } from '../../../../features/models/user.model';
import { ModalService } from '../../../../features/services/modal.service';
import { FormCustomerComponent } from '../../components/form-customer/form-customer.component';
import { ModalConfirmationService } from '../../../../features/services/modal-confirmation.service';



@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  private modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  customers: User[] = MOCK_CUSTOMERS;

  @Input() message: string = '';

  columns = [
    { field: 'id', header: 'Id' },
    { field: 'username', header: 'Username' },
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'dateOfBirth', header: 'Date of Birth' },
    {field: 'identityNumber', header: 'Identification number'},
    { field: 'address', header: 'Address' },
    { field: 'phone', header: 'Phone' },
    { field: 'state', header: 'State' }
  ];

  createCustomer() {
    this.modalService.open(FormCustomerComponent, {functionTyeEm: 'create'});
    console.log('Create customer clicked');
  }

  editCustomer(customer: any) {
    this.modalService.open(FormCustomerComponent, {functionTyeEm: 'update'});
    console.log('Edit:', customer);
  }

  deleteCustomer(customer: any) {
    this.modalConfirmationService.deleteBook("Customer");
    console.log('Delete:', customer);
  }

  viewCustomer(customer: any) {
    console.log('View:', customer);
  }

}
