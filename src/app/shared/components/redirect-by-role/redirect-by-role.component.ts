import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../../features/services/event-emitter.service';

@Component({
  selector: 'app-redirect-by-role',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class RedirectByRoleComponent implements OnInit {

  private router = inject(Router);
  private eventEmitter = inject(EventEmitterService);

  ngOnInit(): void {
    this.eventEmitter.getUser().isAdmin
      ? this.router.navigate(['/storebooks/admin/dashboard'])
      : this.router.navigate(['/storebooks/customer/home']);
  }

}
