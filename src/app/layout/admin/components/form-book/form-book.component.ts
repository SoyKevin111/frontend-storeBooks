import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { Book } from '../../../../features/models/book.model';
import { MOCK_AUTHORS } from '../../../../features/mocks/authors-data.mock';
import { MOCK_EDITORIALS } from '../../../../features/mocks/editorials-data.mock';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

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
    title: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]],
    editorial: ['', Validators.required],
    dateCreated: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(1)]],
    category: ['', [Validators.required, Validators.maxLength(10)]],
    authors: this.fb.array([], [Validators.required]),
    bestSeller: [false]
  });

  ngOnInit() {
    if (!this.book) return;
    const { title, editorial, description, dateCreated, price, stock, category, bestSeller, authors } = this.book;
    this.bookForm.patchValue({ title, editorial: editorial.name, description, dateCreated, price, stock, category, bestSeller });

    const authorsArray = this.bookForm.get('authors') as FormArray;
    authorsArray.clear();
    authors.forEach((author: any) => {
      authorsArray.push(new FormControl(author));
    });
    console.log(this.bookForm.value);
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


  onAuthorChange(event: any, author: any) {
    const authorsArray = this.bookForm.get('authors') as FormArray;
    if (event.target.checked) {
      if (authorsArray.length >= 3) {
        event.target.checked = false; // Revierte la selección
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You can select up to 3 authors only.',
          confirmButtonColor: '#3085d6'
        });
        return;
      }
      authorsArray.push(new FormControl(author));
    } else {
      const index = authorsArray.controls.findIndex(ctrl => ctrl.value.id === author.id);
      if (index !== -1) authorsArray.removeAt(index);
    }
  }

  isAuthorSelected(author: any): boolean {
    const authorsArray = this.bookForm.get('authors') as FormArray;
    return authorsArray.value.some((a: any) => a.id === author.id);
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log('Customer Data:', this.bookForm.value);
      this.close();
    } else {
      this.bookForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.bookForm.controls)) {
        if (control.errors) console.log(`Errores en ${key}:`, control.errors);
      }
    }
  }
}
