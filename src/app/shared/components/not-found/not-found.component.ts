import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.router.navigate(['/storebooks/admin/dashboard']);
  }


}
