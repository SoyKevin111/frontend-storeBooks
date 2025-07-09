import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/common/crud.service';
import { Book } from '../../shared/models/book.model';

const API_URL = 'http://localhost:3000/books';

@Injectable({
	providedIn: 'root'
})
export class BooksService extends CrudService<Book> {

	constructor() {
		super(API_URL)
	}
}
