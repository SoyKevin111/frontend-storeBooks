import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../../shared/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { Book } from '../../../../shared/models/book.model';
import { MOCK_AUTHORS } from '../../../../features/mocks/authors-data.mock';
import { MOCK_EDITORIALS } from '../../../../features/mocks/editorials-data.mock';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { Author, loadAuthors, loadAuthorsSelector } from '../../../../features/authors/store';
import { Editorial, loadEditorials, loadEditorialsSelector } from '../../../../features/editorials/store';
import { Subscription } from 'rxjs';
import { createBook, editBook } from '../../../../features/books/store';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CancelSaveButtonsComponent],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.scss'
})
export class FormBookComponent implements OnInit, OnDestroy {
  private modalService = inject(ModalService);
  private fb = inject(FormBuilder);

  @Input() functionTyeEm = '';
  @Input() book!: Book;
  private store = inject(Store);

  private suscription: Subscription = new Subscription();

  animationState = 'modal-animate-in';
  authorOptions$: Author[] = [];
  editorialOptions$: Editorial[] = [];
  categoryOptions = ['Software Engineering', 'Programming', 'Fiction', 'History', 'Thriller', 'Mystery', 'Philosophy'];


  dropdownState = { editorial: false, category: false, authors: false };

  bookForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]],
    editorial: ['',],
    dateCreated: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(1)]],
    category: ['', [Validators.required, Validators.maxLength(20)]],
    authors: this.fb.array([], [Validators.required]),
    bestSeller: [false]
  });

  ngOnInit() {
    this.loadAuthorsAndEditorials();
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

  loadAuthorsAndEditorials() {
    this.store.dispatch(loadAuthors());
    this.store.dispatch(loadEditorials());

    const sub1 = this.store.select(loadAuthorsSelector).subscribe(authors => {
      this.authorOptions$ = authors;
    });

    const sub2 = this.store.select(loadEditorialsSelector).subscribe(editorials => {
      this.editorialOptions$ = editorials;
    });

    this.suscription.add(sub1);
    this.suscription.add(sub2);
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
      this.save();
      this.close();
    } else {
      this.bookForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.bookForm.controls)) {
        if (control.errors) console.log(`Errores en ${key}:`, control.errors);
      }
    }
  }



  save() {
    function normalizeValue(val: any) {
      if (val === null || val === undefined) return null;
      if (typeof val === 'string' && val.trim() === '') return null;
      if (Array.isArray(val) && val.length === 0) return null;
      return val;
    }
    const book: Book = {
      id: this.book ? Number(this.book.id) : 0,
      isbn: normalizeValue(this.bookForm.get('isbn')?.value),
      title: normalizeValue(this.bookForm.get('title')?.value),
      editorial: normalizeValue(this.bookForm.get('editorial')?.value),
      dateCreated: normalizeValue(this.bookForm.get('dateCreated')?.value),
      description: normalizeValue(this.bookForm.get('description')?.value),
      price: normalizeValue(this.bookForm.get('price')?.value),
      stock: normalizeValue(this.bookForm.get('stock')?.value),
      category: normalizeValue(this.bookForm.get('category')?.value),
      bestSeller: normalizeValue(this.bookForm.get('bestSeller')?.value),
      authors: normalizeValue(this.bookForm.get('authors')?.value),
    };
    if (!this.book) {
      this.store.dispatch(createBook({ newItem: book }));
    } else {
      this.store.dispatch(editBook({ editedItem: book }));
    }
  }


  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
