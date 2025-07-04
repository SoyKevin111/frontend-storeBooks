import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl = 'http://localhost:3000/customers';
  private http = inject(HttpClient);

  constructor() { }


  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl).pipe(
      tap(customers => console.log('Load from JSON server.', customers))
    );
  }

  create(customer: Customer): Observable<Customer> {
    const customerWithId = { //id aleatorio
      ...customer,
      id: String(Math.floor(Math.random() * 1000000) + 1)
    };
    return this.http.post<Customer>(this.apiUrl, customerWithId);
  }

  update(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>(this.apiUrl + '/' + String(id), customer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }


}
