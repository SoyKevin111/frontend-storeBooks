import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../../../shared/models/book.model';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormBookComponent } from '../../components/form-book/form-book.component';
import { ModalConfirmationService } from '../../../../shared/services/modal-confirmation.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteBook, loadBooks, loadBooksSelector } from '../../../../features/books/store';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit, OnDestroy {

  private modalService = inject(ModalService);
  private notificationService = inject(NotificationService);

  private store = inject(Store);
  private subscription: Subscription = new Subscription();

  booksWithExtras$: Book[] = []

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
  ngOnInit(): void {
    this.store.dispatch(loadBooks());
    const sub = this.store.select(loadBooksSelector).subscribe(booksLoaded => {
      this.booksWithExtras$ = booksLoaded.map(book => ({
        ...book,
        editorialName: book.editorial?.name || '',
        authorsNames: (book.authors ?? []).map(a => a.name).join(', ')
      }));
    });

    this.subscription.add(sub);
  }

  createBook() {
    console.log('Create book clicked');
    this.modalService.open(FormBookComponent, { functionTyeEm: 'create' });
  }

  editBook(book: any) {
    console.log('Edit:', book);
    this.modalService.open(FormBookComponent, { functionTyeEm: 'update', book: book });
  }

  deleteBook(book: any) {
    this.notificationService.showConfirmationDelete('Book', () => {
      this.store.dispatch(deleteBook({ id: book.id }));
    });
    console.log('Delete:', book);
  }

  viewBook(book: any) {
    console.log('View:', book);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
