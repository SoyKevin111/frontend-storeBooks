import { Component, inject, Input } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { customersMock } from '../../../../features/admin/mocks/customers-data.mock';
import { User } from '../../../../features/models/user.model';
import { ModalService } from '../../../../features/services/modal.service';
import { FormCustomerComponent } from '../../components/form-customer/form-customer.component';



@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  private modalService = inject(ModalService);

  customers: User[] = customersMock;

  @Input() message: string = '';

  columns = [
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'username', header: 'Username' },
    { field: 'dateOfBirth', header: 'Date of Birth' },
    { field: 'address', header: 'Address' },
    { field: 'phone', header: 'Phone' },
    { field: 'state', header: 'State' }
  ];

  createCustomer() {
    console.log('Create customer clicked');
    this.modalService.open(FormCustomerComponent);
  }

  editCustomer(customer: any) {
    console.log('Edit:', customer);
  }

  deleteCustomer(customer: any) {
    console.log('Delete:', customer);
  }

  viewCustomer(customer: any) {
    console.log('View:', customer);
  }

}
