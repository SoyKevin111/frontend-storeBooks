import { Component, inject } from '@angular/core';
import { Book } from '../../../../features/models/book.model';
import { MOCK_BOOKS } from '../../../../features/mocks/books-data.mock';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../features/services/modal.service';
import { FormBookComponent } from '../../components/form-book/form-book.component';
import { ModalConfirmationService } from '../../../../features/services/modal-confirmation.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CrudTableComponent, PaginationComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  private modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  booksWithExtras: Book[] = MOCK_BOOKS.map(book => ({
    ...book,
    editorialName: book.editorial?.name || '',
    authorsNames: (book.authors ?? []).map(a => a.name).join(', ')
  }));

  columns = [
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    { field: 'category', header: 'Category' },
    { field: 'editorialName', header: 'Editorial' },
    { field: 'authorsNames', header: 'Authors' },
    { field: 'dateCreated', header: 'Publication Date' },
    { field: 'price', header: 'Price' },
    { field: 'stock', header: 'Stock' }
  ];


  createBook() {
    console.log('Create book clicked');
    this.modalService.open(FormBookComponent, { functionTyeEm: 'create' });
  }

  editBook(book: any) {
    console.log('Edit:', book);
    this.modalService.open(FormBookComponent, { functionTyeEm: 'update', book: book });
  }

  deleteBook(book: any) {
    this.modalConfirmationService.deleteBook("Book");
    console.log('Delete:', book);
  }

  viewBook(book: any) {
    console.log('View:', book);
  }

}
