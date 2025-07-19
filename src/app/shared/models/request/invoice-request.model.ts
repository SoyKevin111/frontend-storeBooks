import { InvoiceItemRequest } from "./invoice-item-request.model"

export class InvoiceRequest {
	customerId: number = 0;
	items: InvoiceItemRequest[] = [];
}