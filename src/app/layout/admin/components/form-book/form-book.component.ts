import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { Book } from '../../../../features/models/book.model';
import { MOCK_AUTHORS } from '../../../../features/mocks/authors-data.mock';
import { MOCK_EDITORIALS } from '../../../../features/mocks/editorials-data.mock';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CancelSaveButtonsComponent],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.scss'
})
export class FormBookComponent implements OnInit {
  private modalService = inject(ModalService);
  private fb = inject(FormBuilder);

  @Input() functionTyeEm = '';
  @Input() book!: Book;

  animationState = 'modal-animate-in';
  authorOptions = MOCK_AUTHORS;
  editorialOptions = MOCK_EDITORIALS;
  categoryOptions = ['Tech', 'Design', 'IA', 'Security', 'DevOps', 'Databases'];

  dropdownState = { editorial: false, category: false, authors: false };

  bookForm = this.fb.group({
    isbn: ['', [Validators.required, Validators.maxLength(13), Validators.pattern(/^\d+$/)]],
    title: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]],
    editorial: ['', Validators.required],
    dateCreated: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    category: ['', [Validators.required, Validators.maxLength(10)]],
    authors: [[], Validators.required]
  });

  ngOnInit() {
    if (!this.book) return;
    const { isbn, title, editorial, dateCreated, price, stock, category, authors } = this.book;
    this.bookForm.patchValue({ isbn, title, editorial: editorial.name, dateCreated, price, stock, category, authors: authors as any });
    console.log(authors);
  }

  toggleDropdown(type: keyof typeof this.dropdownState) {
    this.dropdownState[type] = !this.dropdownState[type];
  }

  toggleSelect(type: 'editorial' | 'category', data: any) {
    this.bookForm.get(type)?.setValue(data);
    this.dropdownState[type] = false;
  }

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => this.modalService.close(), 150);
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log('Book Data:', this.bookForm.value);
      this.close();
    } else {
      this.bookForm.markAllAsTouched();
      console.warn('Formulario inválido', this.bookForm.errors);
    }
  }
}
