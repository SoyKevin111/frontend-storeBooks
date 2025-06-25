import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Invoice } from '../../../features/models/invoice.model';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent implements OnInit {

  invoice!: Invoice;

  ngOnInit() {
    const nav = history.state;
    this.invoice = nav['invoice'];
    console.log(nav['invoice']);
    
  }


}
