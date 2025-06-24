import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule, CancelSaveButtonsComponent],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.scss'
})
export class FormBookComponent {

  private modalService = inject(ModalService);
  animationState = 'modal-animate-in';
  @Input() functionTyeEm: string = '';

  dropdownState = {
    authors: false,
    editorials: false,
    category: false
  };


  toggleDropdown(type: 'authors' | 'editorials' | 'category') {
    this.dropdownState[type] = !this.dropdownState[type];
  }

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
