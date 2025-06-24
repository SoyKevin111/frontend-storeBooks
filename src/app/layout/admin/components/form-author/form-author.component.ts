import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';

@Component({
  selector: 'app-form-author',
  standalone: true,
  imports: [CommonModule, CancelSaveButtonsComponent],
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.scss'
})
export class FormAuthorComponent {

  modalService = inject(ModalService);
  animationState = 'modal-animate-in';
  @Input() functionTyeEm: string = '';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
