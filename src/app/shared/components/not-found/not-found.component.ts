import { Component, inject, OnInit } from '@angular/core';
import { EventEmitterService } from '../../../features/services/event-emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class NotFoundComponent implements OnInit {

  private router = inject(Router);
  private eventEmitter = inject(EventEmitterService);

  ngOnInit(): void {
    this.eventEmitter.getUser().isAdmin
      ? this.router.navigate(['/storebooks/admin/dashboard'])
      : this.router.navigate(['/storebooks/customer/home']);
  }


}
