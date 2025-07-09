export class BookRequest {
	id: number = 0;
	isbn: string = '';
	title: string = '';
	description: string = '';
	editorial: number = 0;
	dateCreated: string = '';
	price: number = 0;
	stock: number = 0;
	category: string = '';
	bestSeller: boolean = false;
	authorsId: number[] = [];
}