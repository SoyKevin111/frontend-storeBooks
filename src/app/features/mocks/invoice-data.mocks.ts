import { Invoice } from "../models/invoice.model";

export const MOCK_INVOICES: Invoice[] = [
	{
		numberInvoice: 'INV-1001',
		customer: { id: 1, name: 'Maria', lastName: 'Gonzalez', isAdmin: false, isCustomer: true, username: 'maria', dateOfBirth: '1985-03-12', address: 'Av. Central 123', phone: '0998765432', identityNumber: '0102030405', state: 'ACTIVE' },
		createdAt: '2025-06-01',
		iva: 15,
		ivaTotal: 11.85,
		subtotal: 79.0,
		total: 90.85,
		items: [
			{ id: 1, bookName: 'One Hundred Years of Solitude', priceUnit: 18.0, quantity: 2, subtotal: 36.0 },
			{ id: 2, bookName: 'The Little Prince', priceUnit: 12.0, quantity: 1, subtotal: 12.0 },
			{ id: 3, bookName: 'Pride and Prejudice', priceUnit: 14.0, quantity: 1, subtotal: 14.0 },
			{ id: 4, bookName: '1984', priceUnit: 13.0, quantity: 1, subtotal: 13.0 },
			{ id: 5, bookName: 'The Alchemist', priceUnit: 4.0, quantity: 1, subtotal: 4.0 }
		]
	},
	{
		numberInvoice: 'INV-1002',
		customer: { id: 2, name: 'Carlos', lastName: 'Ramirez', isAdmin: false, isCustomer: true, username: 'carlos', dateOfBirth: '1990-07-25', address: 'Calle Luna 456', phone: '0987654321', identityNumber: '0203040506', state: 'ACTIVE' },
		createdAt: '2025-06-02',
		iva: 15,
		ivaTotal: 9.3,
		subtotal: 62.0,
		total: 71.3,
		items: [
			{ id: 6, bookName: 'The Great Gatsby', priceUnit: 13.0, quantity: 2, subtotal: 26.0 },
			{ id: 7, bookName: 'Brave New World', priceUnit: 12.0, quantity: 2, subtotal: 24.0 },
			{ id: 8, bookName: 'Jane Eyre', priceUnit: 16.0, quantity: 1, subtotal: 16.0 },
			{ id: 9, bookName: 'The Catcher in the Rye', priceUnit: 8.0, quantity: 1, subtotal: 8.0 },
			{ id: 10, bookName: 'Animal Farm', priceUnit: 3.0, quantity: 1, subtotal: 3.0 }
		]
	},
	{
		numberInvoice: 'INV-1003',
		customer: { id: 3, name: 'Laura', lastName: 'Mendez', isAdmin: false, isCustomer: true, username: 'laura', dateOfBirth: '1988-12-03', address: 'Av. Siempre Viva 789', phone: '0976543210', identityNumber: '0304050607', state: 'ACTIVE' },
		createdAt: '2025-06-03',
		iva: 15,
		ivaTotal: 13.95,
		subtotal: 93.0,
		total: 106.95,
		items: [
			{ id: 11, bookName: 'Don Quixote', priceUnit: 20.0, quantity: 3, subtotal: 60.0 },
			{ id: 12, bookName: 'The Hobbit', priceUnit: 11.0, quantity: 1, subtotal: 11.0 },
			{ id: 13, bookName: 'Moby Dick', priceUnit: 9.0, quantity: 2, subtotal: 18.0 },
			{ id: 14, bookName: 'War and Peace', priceUnit: 10.0, quantity: 1, subtotal: 10.0 },
			{ id: 15, bookName: 'The Odyssey', priceUnit: 4.0, quantity: 1, subtotal: 4.0 }
		]
	},
	{
		numberInvoice: 'INV-1004',
		customer: { id: 4, name: 'Jorge', lastName: 'Vargas', isAdmin: false, isCustomer: true, username: 'jorge', dateOfBirth: '1995-05-18', address: 'Calle Falsa 123', phone: '0965432109', identityNumber: '0405060708', state: 'ACTIVE' },
		createdAt: '2025-06-04',
		iva: 15,
		ivaTotal: 10.5,
		subtotal: 70.0,
		total: 80.5,
		items: [
			{ id: 16, bookName: 'The Catcher in the Rye', priceUnit: 8.0, quantity: 2, subtotal: 16.0 },
			{ id: 17, bookName: 'Fahrenheit 451', priceUnit: 11.0, quantity: 2, subtotal: 22.0 },
			{ id: 18, bookName: 'To Kill a Mockingbird', priceUnit: 16.0, quantity: 1, subtotal: 16.0 },
			{ id: 19, bookName: 'The Lord of the Rings', priceUnit: 15.0, quantity: 1, subtotal: 15.0 },
			{ id: 20, bookName: 'Dracula', priceUnit: 6.0, quantity: 1, subtotal: 6.0 }
		]
	},
	{
		numberInvoice: 'INV-1005',
		customer: { id: 5, name: 'Ana', lastName: 'Lopez', isAdmin: false, isCustomer: true, username: 'ana', dateOfBirth: '1992-09-09', address: 'Av. Libertad 321', phone: '0954321098', identityNumber: '0506070809', state: 'ACTIVE' },
		createdAt: '2025-06-05',
		iva: 15,
		ivaTotal: 8.25,
		subtotal: 55.0,
		total: 63.25,
		items: [
			{ id: 21, bookName: 'Frankenstein', priceUnit: 9.0, quantity: 3, subtotal: 27.0 },
			{ id: 22, bookName: 'Dr. Jekyll and Mr. Hyde', priceUnit: 8.0, quantity: 2, subtotal: 16.0 },
			{ id: 23, bookName: 'The Picture of Dorian Gray', priceUnit: 10.0, quantity: 1, subtotal: 10.0 },
			{ id: 24, bookName: 'The Grapes of Wrath', priceUnit: 12.0, quantity: 1, subtotal: 12.0 },
			{ id: 25, bookName: 'Heart of Darkness', priceUnit: 5.0, quantity: 1, subtotal: 5.0 }
		]
	},
	{
		numberInvoice: 'INV-1006',
		customer: { id: 6, name: 'Luis', lastName: 'Martinez', isAdmin: false, isCustomer: true, username: 'luis', dateOfBirth: '1980-11-21', address: 'Calle Verde 654', phone: '0943210987', identityNumber: '0607080910', state: 'ACTIVE' },
		createdAt: '2025-06-06',
		iva: 15,
		ivaTotal: 12.45,
		subtotal: 83.0,
		total: 95.45,
		items: [
			{ id: 26, bookName: 'The Brothers Karamazov', priceUnit: 17.0, quantity: 2, subtotal: 34.0 },
			{ id: 27, bookName: 'Les Misérables', priceUnit: 20.0, quantity: 2, subtotal: 40.0 },
			{ id: 28, bookName: 'The Count of Monte Cristo', priceUnit: 9.0, quantity: 1, subtotal: 9.0 },
			{ id: 29, bookName: 'Wuthering Heights', priceUnit: 10.0, quantity: 1, subtotal: 10.0 },
			{ id: 30, bookName: 'Crime and Punishment', priceUnit: 10.0, quantity: 1, subtotal: 10.0 }
		]
	},
	{
		numberInvoice: 'INV-1007',
		customer: { id: 7, name: 'Sofia', lastName: 'Diaz', isAdmin: false, isCustomer: true, username: 'sofia', dateOfBirth: '1993-04-17', address: 'Av. Sol 987', phone: '0932109876', identityNumber: '0708091011', state: 'ACTIVE' },
		createdAt: '2025-06-07',
		iva: 15,
		ivaTotal: 11.55,
		subtotal: 77.0,
		total: 88.55,
		items: [
			{ id: 31, bookName: 'The Picture of Dorian Gray', priceUnit: 10.0, quantity: 2, subtotal: 20.0 },
			{ id: 32, bookName: 'Dracula', priceUnit: 6.0, quantity: 2, subtotal: 12.0 },
			{ id: 33, bookName: 'The Hobbit', priceUnit: 11.0, quantity: 2, subtotal: 22.0 },
			{ id: 34, bookName: 'Les Misérables', priceUnit: 20.0, quantity: 1, subtotal: 20.0 },
			{ id: 35, bookName: 'The Odyssey', priceUnit: 7.0, quantity: 1, subtotal: 7.0 }
		]
	},
	{
		numberInvoice: 'INV-1008',
		customer: { id: 8, name: 'Diego', lastName: 'Perez', isAdmin: false, isCustomer: true, username: 'diego', dateOfBirth: '1987-08-30', address: 'Calle Azul 111', phone: '0921098765', identityNumber: '0809101112', state: 'ACTIVE' },
		createdAt: '2025-06-08',
		iva: 15,
		ivaTotal: 14.1,
		subtotal: 94.0,
		total: 108.1,
		items: [
			{ id: 36, bookName: 'The Lord of the Rings', priceUnit: 15.0, quantity: 3, subtotal: 45.0 },
			{ id: 37, bookName: 'War and Peace', priceUnit: 10.0, quantity: 3, subtotal: 30.0 },
			{ id: 38, bookName: 'Moby Dick', priceUnit: 9.0, quantity: 2, subtotal: 18.0 },
			{ id: 39, bookName: 'The Brothers Karamazov', priceUnit: 17.0, quantity: 1, subtotal: 17.0 },
			{ id: 40, bookName: 'Heart of Darkness', priceUnit: 5.0, quantity: 1, subtotal: 5.0 }
		]
	},
	{
		numberInvoice: 'INV-1009',
		customer: { id: 9, name: 'Elena', lastName: 'Sanchez', isAdmin: false, isCustomer: true, username: 'elena', dateOfBirth: '1991-10-12', address: 'Av. Rosa 222', phone: '0910987654', identityNumber: '0910111213', state: 'ACTIVE' },
		createdAt: '2025-06-09',
		iva: 15,
		ivaTotal: 13.35,
		subtotal: 89.0,
		total: 102.35,
		items: [
			{ id: 41, bookName: 'Fahrenheit 451', priceUnit: 11.0, quantity: 3, subtotal: 33.0 },
			{ id: 42, bookName: 'Brave New World', priceUnit: 12.0, quantity: 2, subtotal: 24.0 },
			{ id: 43, bookName: 'Frankenstein', priceUnit: 9.0, quantity: 2, subtotal: 18.0 },
			{ id: 44, bookName: 'Animal Farm', priceUnit: 3.0, quantity: 4, subtotal: 12.0 },
			{ id: 45, bookName: 'The Great Gatsby', priceUnit: 13.0, quantity: 1, subtotal: 13.0 }
		]
	},
	{
		numberInvoice: 'INV-1010',
		customer: { id: 10, name: 'Fernando', lastName: 'Morales', isAdmin: false, isCustomer: true, username: 'fernando', dateOfBirth: '1986-06-15', address: 'Calle Roja 789', phone: '0909876543', identityNumber: '1011121314', state: 'ACTIVE' },
		createdAt: '2025-06-10',
		iva: 15,
		ivaTotal: 10.95,
		subtotal: 73.0,
		total: 83.95,
		items: [
			{ id: 46, bookName: 'Jane Eyre', priceUnit: 16.0, quantity: 2, subtotal: 32.0 },
			{ id: 47, bookName: 'The Odyssey', priceUnit: 7.0, quantity: 3, subtotal: 21.0 },
			{ id: 48, bookName: 'The Picture of Dorian Gray', priceUnit: 10.0, quantity: 1, subtotal: 10.0 },
			{ id: 49, bookName: 'Dr. Jekyll and Mr. Hyde', priceUnit: 8.0, quantity: 2, subtotal: 16.0 },
			{ id: 50, bookName: 'Crime and Punishment', priceUnit: 10.0, quantity: 1, subtotal: 10.0 }
		]
	}
];
