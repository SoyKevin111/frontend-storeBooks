import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.scss'
})
export class FormBookComponent {

  private modalService = inject(ModalService);
  animationState = 'modal-animate-in';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }
}
