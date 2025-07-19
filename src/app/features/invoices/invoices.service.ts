import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvoiceRequest } from '../../shared/models/request/invoice-request.model';
import { Observable } from 'rxjs';
import { Invoice } from '../../shared/models/invoice.model';



@Injectable({
	providedIn: 'root'
})
export class InvoicesService {

	API_URL: string = 'http://localhost:8080/storebooks/invoices'
	private http = inject(HttpClient)
	constructor() { }

	create(invoiceRequest: InvoiceRequest): Observable<Invoice> {
		return this.http.post<Invoice>(this.API_URL, invoiceRequest);
	}

	/* 	create(invoiceRequest: InvoiceRequest): Observable<Invoice> {
			const invoiceMapping = this.mappingInvoice(invoiceRequest);
			const invoiceWithId = {
				...invoiceMapping,
				id: String(invoiceMapping.id)
			};
			return this.http.post<Invoice>(this.API_URL, invoiceWithId);
		} */

	findAll(): Observable<Invoice[]> {
		return this.http.get<Invoice[]>(this.API_URL);
	}

	mappingInvoice(invoiceRequest: InvoiceRequest): Invoice {
		return {
			id: Math.floor(Math.random() * 1000000) + 1,
			numberInvoice: 'INV-001',
			customer: {
				id: invoiceRequest.customerId,
				name: 'Carlos',
				lastName: 'Mendoza',
				dateOfBirth: '1990-08-15',
				address: 'Av. Central 123, Quito',
				phone: '0991234567',
				identityNumber: '1723456789',
				state: 'ACTIVE'
			},
			createdAt: new Date().toISOString(),
			iva: 15,
			ivaTotal: 30,
			subtotal: 200,
			total: 230,
			items: invoiceRequest.items.map((item, index) => ({
				id: item.bookId,
				isbn: `978-00000000${item.bookId}`,
				bookName: `Libro ${item.bookId}`,
				priceUnit: 50,
				quantity: item.quantity,
				subtotal: 50 * item.quantity
			}))
		};

	}




}