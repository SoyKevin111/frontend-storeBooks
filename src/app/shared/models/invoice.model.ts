import { InvoiceItemDetails } from "./invoice-item-details.mode";
import { Customer } from "./customer.model";

export class Invoice {
	id: number = 0;
	numberInvoice:string = '';
	customer: Customer = new Customer();
	createdAt: string = '';
	iva: number = 15;
	ivaTotal: number = 0;
	subtotal: number = 0;
	total: number = 0;
	items: InvoiceItemDetails[] = [];
}