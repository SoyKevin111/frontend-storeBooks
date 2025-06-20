import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderPageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
