import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { Customer } from '../../../../shared/models/customer.model';
import { ModalService } from '../../../../shared/services/modal.service';
import { Store } from '@ngrx/store';
import { createCustomer, editCustomer } from '../../../../features/customers/store/customer.actions';

@Component({
  selector: 'app-form-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CancelSaveButtonsComponent],
  templateUrl: './form-customer.component.html',
  styleUrl: './form-customer.component.scss'
})
export class FormCustomerComponent implements OnInit {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  private modalService = inject(ModalService);

  @Input() functionTyeEm = '';
  @Input() customer!: Customer;

  animationState = 'modal-animate-in';
  toggleState = false;

  stateOptions = ['ACTIVE', 'INACTIVE'];

  customerForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]
    ],
    lastName: [
      '',
      [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]
    ],
    identityNumber: [
      '',
      [Validators.required, Validators.pattern(/^\d{10}$/)]
    ],
    dateOfBirth: ['', Validators.required],
    address: [
      '',
      [Validators.required, Validators.maxLength(50), Validators.pattern(/^(?!\s*$).+/)]
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^\d{7,15}$/)]
    ],
    state: [
      '',
      [
        Validators.required,
        (control: AbstractControl) =>
          this.stateOptions.includes(control.value) ? null : { invalidState: true }
      ]
    ]
  });

  ngOnInit() {
    if (!this.customer) return;
    this.customerForm.patchValue({ ...this.customer });
  }

  selectState(state: string) {
    this.customerForm.get('state')?.setValue(state);
    this.toggleState = false;
  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.save();
      this.close();
    } else {
      this.customerForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.customerForm.controls)) {
        if (control.errors) {
          console.log(`Errores en ${key}:`, control.errors);
        }
      }
    }
  }

  save() {
    const customer: Customer = {
      id: this.customer ? Number(this.customer.id) : 0, 
      name: this.customerForm.get('name')?.value || '',
      lastName: this.customerForm.get('lastName')?.value || '',
      identityNumber: String(this.customerForm.get('identityNumber')?.value || ''),
      dateOfBirth: this.customerForm.get('dateOfBirth')?.value || '',
      address: this.customerForm.get('address')?.value || '',
      phone: String(this.customerForm.get('phone')?.value || ''),
      state: this.customerForm.get('state')?.value || ''
    };

    console.log('Customer Data:', customer);

    if (!this.customer) {
      this.store.dispatch(createCustomer({ newCustomer: customer }));
    } else {
      this.store.dispatch(editCustomer({ editedCustomer: customer }));
    }
  }

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => this.modalService.close(), 150);
  }
}
