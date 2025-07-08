import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { deleteCustomer } from '../../features/customers/store/customer.actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private store = inject(Store);

  constructor() { }

  showSuccess(type: string) {
    let title = '';
    let text = '';

    switch (type) {
      case 'CREATE':
        title = 'SAVED';
        text = 'File created successfully.';
        break;
      case 'UPDATE':
        title = 'UPDATED';
        text = 'File updated successfully.';
        break;
      default:
        title = 'SUCCESS';
        text = 'Operation completed successfully.';
        break;
    }

    Swal.fire({
      title: title,
      text: text,
      icon: 'success'
    });
  }

  showConfirmationDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      customClass: {
        confirmButton: 'btn btn-danger me-2',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deleteCustomer({ id }));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }


}
