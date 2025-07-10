import { createAction, props } from '@ngrx/store';
import { Invoice } from '../../../shared/models/invoice.model';
import { InvoiceRequest } from '../../../shared/models/request/invoice-request.model';

// Load
export const loadInvoices = createAction('[invoice] load invoices');
export const loadInvoicesSuccess = createAction(
	'[invoice] load invoices success',
	props<{ items: Invoice[] }>()
);

// Create
export const createInvoice = createAction(
	'[invoice] create invoice',
	props<{ newItem: InvoiceRequest }>()
);
export const createInvoiceSuccess = createAction(
	'[invoice] create invoice success',
	props<{ newItem: Invoice }>()
);
