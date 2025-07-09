import { inject, Injectable } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookRequest } from '../../shared/models/request/book-request.model';
import { Title } from '@angular/platform-browser';


@Injectable({
	providedIn: 'root'
})
export class BooksService {

	API_URL: string = 'http://localhost:3000/books';
	private http = inject(HttpClient);

	constructor() { }

	findAll(): Observable<Book[]> {
		return this.http.get<Book[]>(this.API_URL);
	}

	/* 	create(bookRequest: BookRequest): Observable<Book> {
			return this.http.post<Book>(this.API_URL, bookRequest); //para el backend
		} */

	/* 	update(book: BookRequest, id: number): Observable<Book> {
			return this.http.put<Book>(`${this.API_URL}/${id}}`, book);
		} */

	create(book: BookRequest): Observable<Book> { //solo para json

		const bookMapping = this.mappingBook(book);
		const bookWithId = {
			...bookMapping,
			id: String(Math.floor(Math.random() * 1000000) + 1)
		};
		console.log(bookWithId);
		return this.http.post<Book>(this.API_URL, bookWithId);
	}

	update(book: BookRequest, id: number): Observable<Book> {
		const bookMapping = this.mappingBook(book);
		return this.http.put<Book>(`${this.API_URL}/${String(id)}`, bookMapping);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.API_URL}/${id}`);
	}


	mappingBook(bookRequest: BookRequest): Book {
		const book = new Book();
		book.isbn = "123-232-4545-22";
		book.title = bookRequest.title;
		book.description = bookRequest.description;
		book.editorial = {
			id: 1,
			name: "Addison-Wesley",
			phone: "1234567890",
			website: "https://www.awl.com",
			email: "contact@awl.com",
			state: "ACTIVE"
		};
		book.dateCreated = bookRequest.dateCreated;
		book.price = bookRequest.price;
		book.stock = bookRequest.stock;
		book.category = bookRequest.category;
		book.bestSeller = bookRequest.bestSeller;

		book.authors = [
			{
				id: 1,
				name: "Erich",
				lastName: "Gamma",
				identityNumber: "1234567890",
				email: "egamma@example.com",
				state: "ACTIVE"
			},
			{
				id: 2,
				name: "Richard",
				lastName: "Helm",
				identityNumber: "2345678901",
				email: "rhelm@example.com",
				state: "INACTIVE"
			},
			{
				id: 3,
				name: "Ralph",
				lastName: "Johnson",
				identityNumber: "3456789012",
				email: "rjohnson@example.com",
				state: "ACTIVE"
			}
		];

		return book;
	}


}
