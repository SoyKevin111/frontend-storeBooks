import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Invoice } from '../../../../shared/models/invoice.model';
import { Customer } from '../../../../shared/models/customer.model';
import { Book } from '../../../../shared/models/book.model';
import { InvoiceItemDetails } from '../../../../shared/models/invoice-item-details.mode';
import { InvoiceItemRequest } from '../../../../shared/models/request/invoice-item-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadCustomers, loadCustomersSelector } from '../../../../features/customers/store';
import { loadBooks, loadBooksSelector } from '../../../../features/books/store';
import { InvoicesService } from '../../../../features/invoices/invoices.service';
import { createInvoice } from '../../../../features/invoices/store/invoice.actions';

@Component({
  selector: 'app-form-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-invoice.component.html',
  styleUrl: './form-invoice.component.scss'
})
export class FormInvoiceComponent implements OnInit, OnDestroy {

  private store = inject(Store);


  searchCustomerText = '';
  searchBookText = '';

  filteredCustomers: Customer[] = [];
  filteredBooks: Book[] = [];

  selectedCustomer: Customer | null = null;

  customers$: Customer[] = [];
  books$: Book[] = [];

  invoice: Invoice = {
    id: 0,
    numberInvoice: '',
    customer: new Customer(),
    createdAt: new Date().toISOString(),
    iva: 15,
    ivaTotal: 0,
    subtotal: 0,
    total: 0,
    items: []
  };

  ngOnInit() {
    this.loadCustomersAndBooks();
  }

  loadCustomersAndBooks() {
    this.store.select(loadCustomersSelector).subscribe(customers => {
      if (customers.length === 0) this.store.dispatch(loadCustomers());
      this.customers$ = customers;
    });

    this.store.select(loadBooksSelector).subscribe(books => {
      if (books.length === 0) this.store.dispatch(loadBooks());
      this.books$ = books;
    });
  }

  incrementQuantity(item: InvoiceItemDetails) {
    const maxStock = this.getBookStock(item.id);
    if (item.quantity < maxStock) {
      item.quantity++;
      this.updateInvoiceTotals();
    }
  }

  decrementQuantity(item: InvoiceItemDetails) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateInvoiceTotals();
    }
  }

  getBookStock(bookId: number): number {
    const book = this.books$.find(b => b.id === bookId);
    return book?.stock || 1;
  }

  onSearchCustomer() {
    const term = this.searchCustomerText.toLowerCase();
    this.filteredCustomers = this.customers$.filter(c =>
      c.identityNumber.includes(term) ||
      `${c.name} ${c.lastName}`.toLowerCase().includes(term)
    );
  }

  onSearchBook() {
    const term = this.searchBookText.toLowerCase();
    this.filteredBooks = this.books$.filter(b =>
      b.title.toLowerCase().includes(term) || b.isbn.includes(term)
    );
  }

  selectCustomer(customer: Customer) {
    this.searchCustomerText = '';
    this.selectedCustomer = customer;
    this.invoice.customer = customer;
    this.filteredCustomers = [];
  }

  addBook(book: Book) {
    const existing = this.invoice.items.find(item => item.bookName === book.title);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.invoice.items.push({
        isbn: book.isbn,
        id: book.id,
        bookName: book.title,
        priceUnit: book.price,
        quantity: 1,
        subtotal: book.price
      });
    }
    this.updateInvoiceTotals();
    this.filteredBooks = [];
    this.searchBookText = '';
  }

  updateInvoiceTotals() {
    this.invoice.subtotal = this.invoice.items.reduce((acc, item) => {
      item.subtotal = item.priceUnit * item.quantity;
      return acc + item.subtotal;
    }, 0);
    this.invoice.ivaTotal = (this.invoice.subtotal * this.invoice.iva) / 100;
    this.invoice.total = this.invoice.subtotal + this.invoice.ivaTotal;
  }

  removeBook(item: InvoiceItemDetails) {
    this.invoice.items = this.invoice.items.filter(i => i.id !== item.id);
    this.updateInvoiceTotals();
  }

  clearSelectedCustomer() {
    this.selectedCustomer = null;
    this.invoice.customer = new Customer();
  }

  resetInvoice() {
    this.invoice = {
      id: 0,
      numberInvoice: '',
      customer: new Customer(),
      createdAt: new Date().toISOString(),
      iva: 15,
      ivaTotal: 0,
      subtotal: 0,
      total: 0,
      items: []
    };
  }

  generateInvoice() {
    if (this.selectedCustomer === null) {
      alert('Select a customer, please.');
      return;
    }

    if (this.invoice.items.length === 0) {
      alert('Select at least one book, please.');
      return;
    }

    const invoiceRequest = {
      customerId: this.selectedCustomer.id,
      items: this.invoice.items.map(item => ({
        bookId: item.id,
        quantity: item.quantity
      } as InvoiceItemRequest))
    };
    console.log('Factura para enviar:', invoiceRequest);
    this.store.dispatch(createInvoice({ newItem: invoiceRequest }));
    this.resetInvoice();
    this.clearSelectedCustomer();
  }

  ngOnDestroy(): void { }
}
