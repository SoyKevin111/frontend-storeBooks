import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CommonModule } from '@angular/common';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';

@Component({
  selector: 'app-form-editorial',
  standalone: true,
  imports: [CommonModule, CancelSaveButtonsComponent],
  templateUrl: './form-editorial.component.html',
  styleUrl: './form-editorial.component.scss'
})
export class FormEditorialComponent {

  private modalService = inject(ModalService);
  animationState = 'modal-animate-in';
  @Input() functionTyeEm: string = '';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
