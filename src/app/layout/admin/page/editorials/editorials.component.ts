import { Component, inject } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { Editorial } from '../../../../shared/models/editorial.model';
import { MOCK_EDITORIALS } from '../../../../features/mocks/editorials-data.mock';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormEditorialComponent } from '../../components/form-editorial/form-editorial.component';
import { ModalConfirmationService } from '../../../../shared/services/modal-confirmation.service';

@Component({
  selector: 'app-editorials',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.scss'
})
export class EditorialsComponent {

  modalService = inject(ModalService);
  private modalConfirmationService = inject(ModalConfirmationService);

  editorials: Editorial[] = MOCK_EDITORIALS;
  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'website', header: 'Website' },
    { field: 'email', header: 'Email' },
    { field: 'state', header: 'State' }
  ];

  createEditorial() {
    console.log('Create editorial clicked');
    this.modalService.open(FormEditorialComponent, { functionTyeEm: 'create' });
  }

  editEditorial(editorial: Editorial) {
    console.log('Edit:', editorial);
    this.modalService.open(FormEditorialComponent, { functionTyeEm: 'update', editorial: editorial });
  }

  deleteEditorial(editorial: Editorial) {
    this.modalConfirmationService.deleteBook("Editorial");
    console.log('Delete:', editorial);
  }

  viewEditorial(editorial: Editorial) {
    console.log('View:', editorial);
  }

}
