import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderPageComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
