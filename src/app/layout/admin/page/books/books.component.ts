import { Component, inject } from '@angular/core';
import { Book } from '../../../../features/models/book.model';
import { MOCK_BOOKS } from '../../../../features/mocks/books-data.mock';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../features/services/modal.service';
import { FormBookComponent } from '../../components/form-book/form-book.component';
import { ModalConfirmationService } from '../../../../features/services/modal-confirmation.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  books: Book[] = MOCK_BOOKS;

  modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  columns = [
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    {field: 'category', header: 'Category'},
    { field: 'editorial', header: 'Editorial' },
    {field: 'authors', header: 'Authors'},
    { field: 'dateCreated', header: 'Publication Date' },
    { field: 'price', header: 'Price' },
    { field: 'stock', header: 'Stock' }
  ];

  createBook() {
    console.log('Create book clicked');
    this.modalService.open(FormBookComponent, {functionTyeEm: 'create'});
  }

  editBook(book: any) {
    console.log('Edit:', book);
    this.modalService.open(FormBookComponent, {functionTyeEm: 'update'});
  }

  deleteBook(book: any) {
    this.modalConfirmationService.deleteBook("Book");
    console.log('Delete:', book);
  }

  viewBook(book: any) {
    console.log('View:', book);
  }

}
