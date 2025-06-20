import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-editorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-editorial.component.html',
  styleUrl: './form-editorial.component.scss'
})
export class FormEditorialComponent {

  private modalService = inject(ModalService);
  animationState = 'modal-animate-in';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
