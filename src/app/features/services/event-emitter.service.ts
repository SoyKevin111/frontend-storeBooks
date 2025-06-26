import { EventEmitter, inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  router = inject(Router)

  user: User = {
    id: 1,
    name: 'Kevin Rata',
    lastName: 'Una mas',
    isAdmin: false,
    isCustomer: true,
    identityNumber: '0990204404',
    username: '',
    dateOfBirth: '16/10/2004',
    address: 'flor de bastion #22',
    phone: '0990204404',
    state: 'dead'
  };

  userChanged = new EventEmitter<User>();

  getUser(): User {
    return this.user;
  }

  toggleUser(): void {
    this.user.isAdmin = !this.user.isAdmin;
    this.user.isCustomer = !this.user.isCustomer;
    this.userChanged.emit(this.user);


    if (this.user.isAdmin) {
      this.router.navigate(['/storebooks/dashboard']);
    } else {
      this.router.navigate(['/storebooks/home']);
    }
  }
}
