import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../../shared/services/modal.service';
import { CommonModule } from '@angular/common';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Editorial } from '../../../../shared/models/editorial.model';
import { createEditorial, editEditorial } from '../../../../features/editorials/store/editorial.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form-editorial',
  standalone: true,
  imports: [CommonModule, CancelSaveButtonsComponent, ReactiveFormsModule],
  templateUrl: './form-editorial.component.html',
  styleUrl: './form-editorial.component.scss'
})
export class FormEditorialComponent {

  private modalService = inject(ModalService);
  animationState = 'modal-animate-in';
  private _fb = inject(FormBuilder);
  private store = inject(Store);
  @Input() functionTyeEm: string = '';
  @Input() editorial!: Editorial;

  toggleState = false;
  stateOptions = ['ACTIVE', 'INACTIVE'];


  editorialForm = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
    website: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}$/i)]],
    email: ['', [Validators.required, Validators.email]],
    state: ['', [Validators.required]]
  });


  ngOnInit() {
    if (!this.editorial) return;
    console.log("Editorial cargado: ");

    console.log(this.editorial);

    this.editorialForm.patchValue({ ...this.editorial });
  }

  selectState(state: string) {
    this.editorialForm.get('state')?.setValue(state);
    this.toggleState = false;
  }

  onSubmit() {
    if (this.editorialForm.valid) {
      this.save();
      this.close();
    } else {
      this.editorialForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.editorialForm.controls)) {
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

    const editorial: Editorial = {
      id: this.editorial ? Number(this.editorial.id) : 0,
      name: normalizeValue(this.editorialForm.get('name')?.value),
      phone: normalizeValue(this.editorialForm.get('phone')?.value ? String(this.editorialForm.get('phone')?.value) : null),
      website: normalizeValue(this.editorialForm.get('website')?.value),
      email: normalizeValue(this.editorialForm.get('email')?.value),
      state: normalizeValue(this.editorialForm.get('state')?.value)
    };

    if (!this.editorial) {
      this.store.dispatch(createEditorial({ newItem: editorial }));
    } else {
      this.store.dispatch(editEditorial({ editedItem: editorial }));
    }
  }


  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => this.modalService.close(), 150);
  }

}
