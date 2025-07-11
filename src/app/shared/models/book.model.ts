import { Author } from "./author.model";
import { Editorial } from "./editorial.model";

export class Book {
	id: number = 0;
	isbn: string = '';
	title: string = '';
	description: string = '';
	editorial: Editorial = new Editorial();
	dateCreated: string = '';
	price: number = 0;
	stock: number = 0;
	category: string = '';
	bestSeller: boolean = false;
	authors: Author[] = [];
}