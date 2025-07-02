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
    identityNumber: '0990204404',
    dateOfBirth: '16/10/2004',
    address: 'flor de bastion #22',
    phone: '0990204404',
    state: 'dead'
  };

  userChanged = new EventEmitter<User>();

  getUser(): User {
    return this.user;
  }
}
