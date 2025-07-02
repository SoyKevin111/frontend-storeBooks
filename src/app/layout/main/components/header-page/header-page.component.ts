import { Component, inject, Inject, OnInit } from '@angular/core';
import { Customer } from '../../../../features/models/customer.model';
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
  Customer!: Customer;

  eventEmitterService = inject(EventEmitterService);

  ngOnInit(): void {
    this.Customer = this.eventEmitterService.getCustomer();
    this.eventEmitterService.CustomerChanged.subscribe(Customer => {
      this.Customer = Customer;
    });
  }

  openShoppingCart(): void {
    this.modalService.open(ShoppingCartComponent);
  }

}
