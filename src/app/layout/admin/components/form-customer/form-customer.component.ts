import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { ModalService } from '../../../../features/services/modal.service';
import { CancelSaveButtonsComponent } from '../../../../shared/components/cancel-save-buttons/cancel-save-buttons.component';
import { Customer } from '../../../../features/models/customer.model';

@Component({
  selector: 'app-form-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CancelSaveButtonsComponent],
  templateUrl: './form-customer.component.html',
  styleUrl: './form-customer.component.scss'
})
export class FormCustomerComponent implements OnInit {
  private modalService = inject(ModalService);
  private fb = inject(FormBuilder);

  @Input() functionTyeEm = '';
  @Input() customer!: Customer;

  animationState = 'modal-animate-in';
  toggleState = false;
  stateOptions = ['Active', 'Inactive'];

  customerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]],
    lastName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(?!\s*$).+/)]],
    Customername: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^(?!\s*$).+/)]],
    identityNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    dateOfBirth: ['', Validators.required],
    address: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^(?!\s*$).+/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
    state: ['', [Validators.required, (control: AbstractControl) => this.stateOptions.includes(control.value) ? null : { invalidState: true }]]
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
      console.log('Customer Data:', this.customerForm.value);
      this.close();
    } else {
      this.customerForm.markAllAsTouched();
      for (const [key, control] of Object.entries(this.customerForm.controls)) {
        if (control.errors) console.log(`Errores en ${key}:`, control.errors);
      }
    }
  }

  close() {
    this.animationState = 'modal-animate-out';
    setTimeout(() => this.modalService.close(), 150);
  }
}
