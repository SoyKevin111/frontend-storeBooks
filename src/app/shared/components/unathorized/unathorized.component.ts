import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unathorized',
  standalone: true,
  imports: [],
  templateUrl: './unathorized.component.html',
  styleUrl: './unathorized.component.scss'
})
export class UnathorizedComponent {

  router = inject(Router);

  goBack(): void {
    this.router.navigate(['/storebooks']);
  }

}
