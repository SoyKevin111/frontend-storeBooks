import { Component, inject } from '@angular/core';
import { Author } from '../../../../features/models/author.model';
import { MOCK_AUTHORS } from '../../../../features/mocks/authors-data.mock';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../features/services/modal.service';
import { FormAuthorComponent } from '../../components/form-author/form-author.component';
import { ModalConfirmationService } from '../../../../features/services/modal-confirmation.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

  modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  authors: Author[] = MOCK_AUTHORS;
  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'identityNumber', header: 'Identification number' },
    { field: 'email', header: 'Email' },
    { field: 'state', header: 'State' }
  ];

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
  viewAuthor(author: Author) {
    console.log('View:', author);
  }

}
