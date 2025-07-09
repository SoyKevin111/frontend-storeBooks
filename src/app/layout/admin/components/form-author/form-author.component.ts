import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Author } from '../../../../shared/models/author.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { Store } from '@ngrx/store';
import { createAuthor, editAuthor } from '../../../../features/authors/store/author.actions';

@Component({
  selector: 'app-form-author',
  standalone: true,
  imports: [CommonModule, CancelSaveButtonsComponent, ReactiveFormsModule],
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.scss'
})
export class FormAuthorComponent implements OnInit {

  modalService = inject(ModalService);
  animationState = 'modal-animate-in';
  @Input() functionTyeEm: string = '';
  @Input() author!: Author;
  private store = inject(Store);
  private _fb = inject(FormBuilder);

  toggleState = false;
  stateOptions = ['Active', 'Inactive'];

  authorForm = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^(?!\s*$).+/)]],
    lastName: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^(?!\s*$).+/)]],
    identityNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    state: ['', [Validators.required, (control: AbstractControl) => this.stateOptions.includes(control.value) ? null : { invalidState: true }]]
  });



  ngOnInit() {
    if (!this.author) return;
    this.authorForm.patchValue({ ...this.author });
  }

  selectState(state: string) {
    this.authorForm.get('state')?.setValue(state);
    this.toggleState = false;
  }


  submit() {
    if (this.authorForm.valid) {
      this.save();
      this.close();
    } else {
      this.authorForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.authorForm.controls)) {
        if (control.errors) console.log(`Errores en ${key}:`, control.errors);
      }
    }
  }

  save() {
    const normalizeValue = (val: any) => {
      if (val === null || val === undefined) return null;
      if (typeof val === 'string' && val.trim() === '') return null;
      return val;
    };

    const author: Author = {
      id: this.author ? Number(this.author.id) : 0,
      name: normalizeValue(this.authorForm.get('name')?.value),
      lastName: normalizeValue(this.authorForm.get('lastName')?.value),
      identityNumber: normalizeValue(this.authorForm.get('identityNumber')?.value ? String(this.authorForm.get('identityNumber')?.value) : null),
      email: normalizeValue(this.authorForm.get('email')?.value),
      state: normalizeValue(this.authorForm.get('state')?.value)
    };

    if (!this.author) {
      this.store.dispatch(createAuthor({ newItem: author }));
    } else {
      this.store.dispatch(editAuthor({ editedItem: author }));
    }
  }


  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => { this.modalService.close(); }, 150);

  }

}
