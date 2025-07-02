import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Invoice } from '../../models/invoice.model';

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


  ngOnInit() {
    const nav = history.state;
    this.invoice = nav['invoice'];
    console.log(nav['invoice']);

  }

  redirectBack() {
    this.router.navigate(['/storebooks/admin/invoices'])
  }

}
