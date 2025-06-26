import { Component, inject } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  private modalService = inject(ModalService);
   animationState = 'modal-animate-in';

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
