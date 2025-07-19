import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../../../shared/models/customer.model';

import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../../features/auth/authentication.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  Customer!: Customer;
  
  private authService = inject(AuthenticationService);
  private router = inject(Router);

  isCollapsed = true;
  private collapseTimeout: any;



  ngOnInit(): void {
  }

  onSidebarEnter() {
    clearTimeout(this.collapseTimeout);
    this.isCollapsed = false;
  }

  onSidebarLeave() {
    this.collapseTimeout = setTimeout(() => {
      this.isCollapsed = true;
    }, 200);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }



}
