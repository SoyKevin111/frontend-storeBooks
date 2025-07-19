import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../features/auth/authentication.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
  <h1>xdddd</h1>
  `,
  styles: ``
})
export class NotFoundComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthenticationService)

  ngOnInit(): void {
    if(this.authService.isSessionActive()) this.router.navigate(['/storebooks/admin/dashboard']);
    this.router.navigate(['/login']);
  }


}
