import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private store = inject(Store);

  constructor() { }

  showError(error: any) {
    Swal.fire({
      title: error.type || 'An error occurred',
      text: error.message || 'Something went wrong. Please try again.',
      icon: 'error',
      footer: error.timestamp ? `<small>${error.timestamp}</small>` : '',
      confirmButtonText: 'OK',
      confirmButtonColor: '#d33',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'swal2-border-radius',
        confirmButton: 'swal2-ok-button'
      }
    });
  }


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

  showConfirmationDelete(
    entityName: string,
    deleteAction: () => void
  ) {
    Swal.fire({
      title: `Are you sure you want to delete this ${entityName}?`,
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
        deleteAction();
        Swal.fire('Deleted!', `The ${entityName} has been deleted.`, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', `The ${entityName} was not deleted.`, 'info');
      }
    });
  }

}
