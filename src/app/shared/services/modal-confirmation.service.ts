import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmationService {

  constructor() { }

  deleteBook(label: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: `This will permanently delete the ${label}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`${label} deleted`);
        Swal.fire('Deleted!', `The ${label} has been deleted.`, 'success');
      }
    });
  }
}
