import { Component, inject } from '@angular/core';
import { Author } from '../../../../features/models/author.model';
import { authorsMock } from '../../../../features/admin/mocks/authors-data.mock';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { ModalService } from '../../../../features/services/modal.service';
import { FormAuthorComponent } from '../../components/form-author/form-author.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {

  modalService = inject(ModalService);

  authors: Author[] = authorsMock;
  columns = [
    { field: 'name', header: 'Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email' },
    { field: 'state', header: 'State' }
  ];

  createAuthor() {
    console.log('Create author clicked');
    this.modalService.open(FormAuthorComponent); // Assuming you have a FormAuthorComponent
  }
  editAuthor(author: Author) {
    console.log('Edit:', author);
  }
  deleteAuthor(author: Author) {
    console.log('Delete:', author);
  }
  viewAuthor(author: Author) {
    console.log('View:', author);
  }

}
