import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../../../shared/models/author.model';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormAuthorComponent } from '../../components/form-author/form-author.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteAuthor, loadAuthors, loadAuthorsSelector } from '../../../../features/authors/store';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent implements OnInit, OnDestroy {

  modalService = inject(ModalService);
  private notificationService = inject(NotificationService);
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
    let authorsLoadedOnce = false;

    const sub = this.store.select(loadAuthorsSelector).subscribe(authors => {
      if (!authorsLoadedOnce && authors.length === 0) {
        this.store.dispatch(loadAuthors());
        authorsLoadedOnce = true;
      }
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
    this.notificationService.showConfirmationDelete('Author', () => {
      this.store.dispatch(deleteAuthor({ id: author.id }));
    });
    console.log('Delete:', author);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
