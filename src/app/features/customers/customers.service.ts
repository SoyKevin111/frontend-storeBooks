import { Injectable } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';
import { CrudService } from '../../shared/common/crud.service';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends CrudService<Customer> {

  constructor() {
    super(API_URL);
  }

}
