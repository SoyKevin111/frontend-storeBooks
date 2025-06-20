import { Component, inject } from '@angular/core';
import { Book } from '../../../../features/models/book.model';
import { booksMock } from '../../../../features/admin/mocks/book-data.mock';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../features/services/modal.service';
import { FormBookComponent } from '../../components/form-book/form-book.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  books: Book[] = booksMock;

  modalService = inject(ModalService);

  columns = [
    /* { field: 'id', header: 'ID' }, */
    { field: 'isbn', header: 'ISBN' },
    { field: 'title', header: 'Title' },
    { field: 'editorial', header: 'Editorial' },
    { field: 'dateCreated', header: 'Date Created' },
    { field: 'price', header: 'Price' },
    { field: 'stock', header: 'Stock' }
  ];

  createBook() {
    console.log('Create book clicked');
    this.modalService.open(FormBookComponent);
  }

  editBook(book: any) {
    console.log('Edit:', book);
  }

  deleteBook(book: any) {
    console.log('Delete:', book);
  }

  viewBook(book: any) {
    console.log('View:', book);
  }

}
