import { Component, inject, Inject, OnInit } from '@angular/core';
import { Customer } from '../../../../shared/models/customer.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { ShoppingCartComponent } from '../../../customer/components/shopping-cart/shopping-cart.component';
import { EventEmitterService } from '../../../../shared/services/event-emitter.service';
import { AuthenticationService } from '../../../../features/auth/authentication.service';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent implements OnInit {

  private modalService = inject(ModalService);
  private authService = inject(AuthenticationService);
  Customer!: Customer;

  eventEmitterService = inject(EventEmitterService);

  ngOnInit(): void {
    this.Customer = this.eventEmitterService.getCustomer();
    this.eventEmitterService.CustomerChanged.subscribe(Customer => {
      this.Customer = Customer;
    });
  }

  getUsername(): string | null {
    return this.authService.getToken()?.username || '';
  }

  openShoppingCart(): void {
    this.modalService.open(ShoppingCartComponent);
  }

}
