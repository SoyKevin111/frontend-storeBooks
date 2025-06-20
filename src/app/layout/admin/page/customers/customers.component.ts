import { Component } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { customersMock } from '../../../../features/admin/mocks/customers-data.mock';
import { User } from '../../../../features/models/user.model';



@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  customers:User[] = customersMock;

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
