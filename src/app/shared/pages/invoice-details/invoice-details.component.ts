import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Invoice } from '../../../features/models/invoice.model';
import { EventEmitterService } from '../../../features/services/event-emitter.service';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent implements OnInit {

  invoice!: Invoice;
  router = inject(Router);
  private eventEmitter = inject(EventEmitterService)


  ngOnInit() {
    const nav = history.state;
    this.invoice = nav['invoice'];
    console.log(nav['invoice']);

  }

  redirectBack() {
    this.eventEmitter.getUser().isAdmin
      ? this.router.navigate(['/storebooks/admin/invoices'])
      : this.router.navigate(['/storebooks/customer/history']);
  }

}
