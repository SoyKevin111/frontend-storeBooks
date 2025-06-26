import { Component, inject, Inject, OnInit } from '@angular/core';
import { User } from '../../../../features/models/user.model';
import { EventEmitterService } from '../../../../features/services/event-emitter.service';
import { ModalService } from '../../../../features/services/modal.service';
import { ShoppingCartComponent } from '../../../customer/components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent implements OnInit {

  private modalService = inject(ModalService);
  user!: User;

  eventEmitterService = inject(EventEmitterService);

  ngOnInit(): void {
    this.user = this.eventEmitterService.getUser();
    this.eventEmitterService.userChanged.subscribe(user => {
      this.user = user;
    });
  }

  openShoppingCart(): void {
    this.modalService.open(ShoppingCartComponent);
  }

  toggleUser(): void {
    this.eventEmitterService.toggleUser();
  }

}
