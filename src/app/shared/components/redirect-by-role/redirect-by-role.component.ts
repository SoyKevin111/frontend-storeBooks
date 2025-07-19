import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-by-role',
  standalone: true,
  imports: [],
  template: `
  <h1>Helloooo</h1>
  `,
  styles: ``
})
export class RedirectByRoleComponent implements OnInit {

  private router = inject(Router);

  ngOnInit(): void {
    //this.router.navigate(['/storebooks/admin/dashboard']);
  }

}
