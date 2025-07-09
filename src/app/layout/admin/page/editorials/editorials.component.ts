import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CrudTableComponent } from '../../../../shared/components/crud-table/crud-table.component';
import { Editorial } from '../../../../shared/models/editorial.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { FormEditorialComponent } from '../../components/form-editorial/form-editorial.component';
import { ModalConfirmationService } from '../../../../shared/services/modal-confirmation.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteEditorial, loadEditorials } from '../../../../features/editorials/store/editorial.actions';
import { loadEditorialsSelector } from '../../../../features/editorials/store/editorial.selectors';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-editorials',
  standalone: true,
  imports: [CrudTableComponent],
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.scss'
})
export class EditorialsComponent implements OnInit, OnDestroy {

  private store = inject(Store);
  private modalService = inject(ModalService);
  private notificationService = inject(NotificationService);

  private subscription: Subscription = new Subscription();

  editorials$: Editorial[] = [];
  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'phone', header: 'Phone' },
    { field: 'website', header: 'Website' },
    { field: 'email', header: 'Email' },
    { field: 'state', header: 'State' }
  ];

  ngOnInit(): void {
    const sub = this.store.select(loadEditorialsSelector).subscribe(editorials => {
      if (editorials.length === 0) this.store.dispatch(loadEditorials());
      this.editorials$ = editorials;
    });

    this.subscription.add(sub);
  }


  createEditorial() {
    console.log('Create editorial clicked');
    this.modalService.open(FormEditorialComponent, { functionTyeEm: 'create' });
  }

  editEditorial(editorial: Editorial) {
    console.log('Edit:', editorial);
    this.modalService.open(FormEditorialComponent, { functionTyeEm: 'update', editorial: editorial });
  }

  deleteEditorial(editorial: Editorial) {
    this.notificationService.showConfirmationDelete('Customer', () => {
      this.store.dispatch(deleteEditorial({ id: editorial.id }));
    });
    console.log('Delete:', editorial);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
