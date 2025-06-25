import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Author } from '../../../../features/models/author.model';

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
  private _fb = inject(FormBuilder);

  toggleState = false;
  stateOptions = ['Active', 'Inactive'];

  authorForm = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.maxLength(15)]],
    identityNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    state: ['', [Validators.required]]
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
      console.log('Customer Data:', this.authorForm.value);
      this.close();
    } else {
      this.authorForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.authorForm.controls)) {
        if (control.errors) console.log(`Errores en ${key}:`, control.errors);
      }
    }
  }

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
