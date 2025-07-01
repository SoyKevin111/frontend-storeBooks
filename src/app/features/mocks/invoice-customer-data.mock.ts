import { Invoice } from "../models/invoice.model";
import { User } from "../models/user.model";

const commonCustomer: User = {
	id: 1,
	name: 'Ana',
	lastName: 'Lopez',
	isAdmin: false,
	isCustomer: true,
	username: 'ana',
	dateOfBirth: '1992-09-09',
	address: 'Av. Libertad 321',
	phone: '0954321098',
	identityNumber: '0506070809',
	state: 'ACTIVE'
};

export const MOCK_INVOICES_CUSTOMER: Invoice[] = [
	{
		numberInvoice: 'INV-2001',
		customer: commonCustomer,
		createdAt: '2025-06-01',
		iva: 15,
		ivaTotal: 7.5,
		subtotal: 50.0,
		total: 57.5,
		items: [
			{ id: 1, bookName: '1984', priceUnit: 10.0, quantity: 2, subtotal: 20.0, isbn: '9780451524935' },
			{ id: 2, bookName: 'The Alchemist', priceUnit: 15.0, quantity: 2, subtotal: 30.0, isbn: '9780061122415' }
		]
	},
	{
		numberInvoice: 'INV-2002',
		customer: commonCustomer,
		createdAt: '2025-06-02',
		iva: 15,
		ivaTotal: 6.75,
		subtotal: 45.0,
		total: 51.75,
		items: [
			{ id: 3, bookName: 'The Hobbit', priceUnit: 15.0, quantity: 3, subtotal: 45.0, isbn: '9780547928227' }
		]
	},
	{
		numberInvoice: 'INV-2003',
		customer: commonCustomer,
		createdAt: '2025-06-03',
		iva: 15,
		ivaTotal: 9.0,
		subtotal: 60.0,
		total: 69.0,
		items: [
			{ id: 4, bookName: 'Don Quixote', priceUnit: 20.0, quantity: 3, subtotal: 60.0, isbn: '9780060934347' }
		]
	},
	{
		numberInvoice: 'INV-2004',
		customer: commonCustomer,
		createdAt: '2025-06-04',
		iva: 15,
		ivaTotal: 10.5,
		subtotal: 70.0,
		total: 80.5,
		items: [
			{ id: 5, bookName: 'Pride and Prejudice', priceUnit: 14.0, quantity: 5, subtotal: 70.0, isbn: '9781503290563' }
		]
	},
	{
		numberInvoice: 'INV-2005',
		customer: commonCustomer,
		createdAt: '2025-06-05',
		iva: 15,
		ivaTotal: 12.0,
		subtotal: 80.0,
		total: 92.0,
		items: [
			{ id: 6, bookName: 'Brave New World', priceUnit: 20.0, quantity: 4, subtotal: 80.0, isbn: '9780060850524' }
		]
	},
	{
		numberInvoice: 'INV-2006',
		customer: commonCustomer,
		createdAt: '2025-06-06',
		iva: 15,
		ivaTotal: 8.25,
		subtotal: 55.0,
		total: 63.25,
		items: [
			{ id: 7, bookName: 'Jane Eyre', priceUnit: 11.0, quantity: 5, subtotal: 55.0, isbn: '9780141441146' }
		]
	},
	{
		numberInvoice: 'INV-2007',
		customer: commonCustomer,
		createdAt: '2025-06-07',
		iva: 15,
		ivaTotal: 6.0,
		subtotal: 40.0,
		total: 46.0,
		items: [
			{ id: 8, bookName: 'Animal Farm', priceUnit: 8.0, quantity: 5, subtotal: 40.0, isbn: '9780451526342' }
		]
	},
	{
		numberInvoice: 'INV-2008',
		customer: commonCustomer,
		createdAt: '2025-06-08',
		iva: 15,
		ivaTotal: 9.75,
		subtotal: 65.0,
		total: 74.75,
		items: [
			{ id: 9, bookName: 'Dracula', priceUnit: 13.0, quantity: 5, subtotal: 65.0, isbn: '9780141439846' }
		]
	},
	{
		numberInvoice: 'INV-2009',
		customer: commonCustomer,
		createdAt: '2025-06-09',
		iva: 15,
		ivaTotal: 10.5,
		subtotal: 70.0,
		total: 80.5,
		items: [
			{ id: 10, bookName: 'Moby Dick', priceUnit: 14.0, quantity: 5, subtotal: 70.0, isbn: '9781503280786' }
		]
	},
	{
		numberInvoice: 'INV-2010',
		customer: commonCustomer,
		createdAt: '2025-06-10',
		iva: 15,
		ivaTotal: 13.5,
		subtotal: 90.0,
		total: 103.5,
		items: [
			{ id: 11, bookName: 'Les Misérables', priceUnit: 30.0, quantity: 3, subtotal: 90.0, isbn: '9780451419439' }
		]
	}
];
