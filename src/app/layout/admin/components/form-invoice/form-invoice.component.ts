import { Component } from '@angular/core';
import { Invoice } from '../../../../shared/models/invoice.model';
import { Customer } from '../../../../shared/models/customer.model';
import { Book } from '../../../../shared/models/book.model';
import { MOCK_BOOKS } from '../../../../features/mocks/books-data.mock';
import { InvoiceItemDetails } from '../../../../shared/models/invoice-item-details.mode';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MOCK_CUSTOMERS } from '../../../../features/mocks/customers-data.mock';

@Component({
  selector: 'app-form-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-invoice.component.html',
  styleUrl: './form-invoice.component.scss'
})
export class FormInvoiceComponent {

  // Buscadores
  searchCustomerText = '';
  searchBookText = '';

  filteredCustomers: Customer[] = [];
  filteredBooks: Book[] = [];

  selectedCustomer: Customer | null = null;

  // Datos simulados
  customers: Customer[] = MOCK_CUSTOMERS;

  books: Book[] = MOCK_BOOKS;

  // Factura
  invoice: Invoice = {
    numberInvoice: '',
    customer: new Customer(),
    createdAt: new Date().toISOString(),
    iva: 15,
    ivaTotal: 0,
    subtotal: 0,
    total: 0,
    items: []
  };

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

  // Devuelve el stock disponible según el ID del libro
  getBookStock(bookId: number): number {
    const book = this.books.find(b => b.id === bookId);
    return book?.stock || 1;  // valor por defecto si no se encuentra
  }


  onSearchCustomer() {
    const term = this.searchCustomerText.toLowerCase();
    this.filteredCustomers = this.customers.filter(c =>
      c.identityNumber.includes(term) ||
      `${c.name} ${c.lastName}`.toLowerCase().includes(term)
    );
  }

  onSearchBook() {
    const term = this.searchBookText.toLowerCase();
    this.filteredBooks = this.books.filter(b =>
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


  generateInvoice() {
    if (this.selectedCustomer === null) {
      alert('Select a customer, please.');
      return;
    }
    console.log('Factura generada:', this.invoice);
  }

}
