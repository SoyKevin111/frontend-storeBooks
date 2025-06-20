import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';

@Component({
  selector: 'app-form-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.scss'
})
export class FormAuthorComponent {

  modalService = inject(ModalService);

    animationState = 'modal-animate-in';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
