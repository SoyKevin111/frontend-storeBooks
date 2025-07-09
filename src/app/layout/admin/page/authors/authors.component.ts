import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../../../shared/models/author.model';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormAuthorComponent } from '../../components/form-author/form-author.component';
import { ModalConfirmationService } from '../../../../shared/services/modal-confirmation.service';
import { Store } from '@ngrx/store';
import { loadAuthorsSelector, selectAuthorsState } from '../../../../features/authors/store/author.selectors';
import { loadAuthors } from '../../../../features/authors/store/author.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent implements OnInit, OnDestroy {

  modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);
  private store = inject(Store);

  private subscription: Subscription = new Subscription();

  authors$: Author[] = [];
  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'identityNumber', header: 'Identification number' },
    { field: 'email', header: 'Email' },
    { field: 'state', header: 'State' }
  ];


  ngOnInit(): void {
    this.store.dispatch(loadAuthors());

    const sub = this.store.select(loadAuthorsSelector).subscribe(authors => {
      this.authors$ = authors;
    });

    this.subscription.add(sub);
  }


  createAuthor() {
    console.log('Create author clicked');
    this.modalService.open(FormAuthorComponent, { functionTyeEm: 'create' });
  }
  editAuthor(author: Author) {
    console.log('Edit:', author);
    this.modalService.open(FormAuthorComponent, { functionTyeEm: 'update', author: author });
  }
  deleteAuthor(author: Author) {
    this.modalConfirmationService.deleteBook("Author");
    console.log('Delete:', author);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
