import { Component } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { Editorial } from '../../../../features/models/editorial.model';
import { editorialsMock } from '../../../../features/admin/mocks/editorials-data.mock';

@Component({
  selector: 'app-editorials',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.scss'
})
export class EditorialsComponent {

  editorials: Editorial[] = editorialsMock;
  columns = [
  { field: 'name', header: 'Name' },
  { field: 'phone', header: 'Phone' },
  { field: 'website', header: 'Website' },
  { field: 'email', header: 'Email' },
  { field: 'state', header: 'State' }
];

  createEditorial() {
    console.log('Create editorial clicked');
  }

  editEditorial(editorial: Editorial) {
    console.log('Edit:', editorial);
  }

  deleteEditorial(editorial: Editorial) {
    console.log('Delete:', editorial);
  }

  viewEditorial(editorial: Editorial) {
    console.log('View:', editorial);
  }

}
