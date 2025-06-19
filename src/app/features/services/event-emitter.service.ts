import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  user: User = {
    id: 1,
    name: 'Kevin Rata',
    lastName: 'Una mas',
    isAdmin: true,
    isCustomer: false,
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
  }
}
