import { InvoiceItemDetails } from "./invoice-item-details.mode";
import { User } from "./user.model";

export class Invoice {
	numberInvoice:string = '';
	customer: User = new User();
	createdAt: string = '';
	iva: number = 15;
	ivaTotal: number = 0;
	subtotal: number = 0;
	total: number = 0;
	items: InvoiceItemDetails[] = [];
}