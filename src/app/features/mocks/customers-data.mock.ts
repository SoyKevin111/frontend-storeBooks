import { User } from "../models/user.model";

export const MOCK_CUSTOMERS: User[] = [
	{
		id: 1,
		name: 'Juan',
		lastName: 'Pérez',
		dateOfBirth: '1985-03-22',
		address: 'Av. Siempre Viva 123',
		phone: '5551234',
		identityNumber: '12345678',
		state: 'ACTIVE'
	},
	{
		id: 2,
		name: 'María',
		lastName: 'López',
		dateOfBirth: '1985-03-22',
		address: 'Calle Falsa 456',
		phone: '5555678',
		identityNumber: '87654321',
		state: 'ACTIVE'
	},
	{
		id: 3,
		name: 'Carlos',
		lastName: 'González',
		dateOfBirth: '1992-11-30',
		address: 'Calle Luna 789',
		phone: '5559012',
		identityNumber: '11223344',
		state: 'InACTIVE'
	},
	{
		id: 4,
		name: 'Laura',
		lastName: 'Ramírez',
		dateOfBirth: '1995-07-19',
		address: 'Av. Sol 321',
		phone: '5553456',
		identityNumber: '44332211',
		state: 'ACTIVE'
	},
	{
		id: 5,
		name: 'Pedro',
		lastName: 'Martínez',
		dateOfBirth: '1980-01-10',
		address: 'Pasaje Norte 654',
		phone: '5557890',
		identityNumber: '99887766',
		state: 'InACTIVE'
	},
	{
		id: 6,
		name: 'Ana',
		lastName: 'Torres',
		dateOfBirth: '1993-04-25',
		address: 'Calle Este 888',
		phone: '5556789',
		identityNumber: '66778899',
		state: 'ACTIVE'
	},
	{
		id: 7,
		name: 'Diego',
		lastName: 'Sánchez',
		dateOfBirth: '1991-09-14',
		address: 'Av. Central 159',
		phone: '5554321',
		identityNumber: '33445566',
		state: 'ACTIVE'
	},
	{
		id: 8,
		name: 'Lucía',
		lastName: 'Mendoza',
		dateOfBirth: '1996-12-05',
		address: 'Calle Sur 100',
		phone: '5556543',
		identityNumber: '22113344',
		state: 'ACTIVE'
	},
	{
		id: 9,
		name: 'Andrés',
		lastName: 'Fernández',
		dateOfBirth: '1988-02-28',
		address: 'Ruta 40 km 21',
		phone: '5553458',
		identityNumber: '55667788',
		state: 'ACTIVE'
	},
	{
		id: 10,
		name: 'Elena',
		lastName: 'Silva',
		dateOfBirth: '1994-08-08',
		address: 'Plaza Mayor 5',
		phone: '5558888',
		identityNumber: '88990011',
		state: 'ACTIVE'
	}
];
