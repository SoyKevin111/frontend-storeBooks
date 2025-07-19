import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-save-buttons',
  standalone: true,
  imports: [],
  templateUrl: './cancel-save-buttons.component.html',
  styleUrl: './cancel-save-buttons.component.scss'
})
export class CancelSaveButtonsComponent {

  @Input() functionTyeRec: string = '';

  @Output() closeModal = new EventEmitter<any>();

  close(action: any) {
    this.closeModal.emit(action);
  }

}
