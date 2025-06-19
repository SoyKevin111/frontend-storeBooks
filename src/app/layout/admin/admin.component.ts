import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { HeaderPageAdminComponent } from './components/header-page-admin/header-page-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, SidebarAdminComponent, HeaderPageAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
