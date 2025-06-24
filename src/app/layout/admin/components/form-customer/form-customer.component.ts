import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnDestroy } from '@angular/core';
import { ModalService } from '../../../../features/services/modal.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';

@Component({
  selector: 'app-form-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CancelSaveButtonsComponent],
  templateUrl: './form-customer.component.html',
  styleUrl: './form-customer.component.scss'
})
export class FormCustomerComponent {

  private modalService = inject(ModalService);
  private _fb = inject(FormBuilder);

  animationState = 'modal-animate-in';
  @Input() functionTyeEm: string = '';


  createCustomerForm = this._fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern(/^(?!\s*$).+/)
      ]
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern(/^(?!\s*$).+/)
      ]
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^(?!\s*$).+/)
      ]
    ],
    dateOfBirth: [
      '',
      [Validators.required]
    ],
    address: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^(?!\s*$).+/)
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{7,15}$/) // entre 7 y 15 dígitos
      ]
    ],
    state: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(frequent|occasional|rare|inactive)$/)
      ]
    ]
  });


  onSubmit() {
    if (this.createCustomerForm.valid) {
      const customerData = this.createCustomerForm.value;
      console.log('Customer Data:', customerData);
      this.close();
    } else {
      this.createCustomerForm.markAllAsTouched();

      Object.entries(this.createCustomerForm.controls).forEach(([key, control]) => {
        if (control.errors) {
          console.log(`Errores en ${key}:`, control.errors);
        }
      });
    }
  }



  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => {
      this.modalService.close();
    }, 150);

  }

}
