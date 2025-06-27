import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../../features/services/event-emitter.service';

@Component({
  selector: 'app-unathorized',
  standalone: true,
  imports: [],
  templateUrl: './unathorized.component.html',
  styleUrl: './unathorized.component.scss'
})
export class UnathorizedComponent {

  router = inject(Router);
  private eventEmitter = inject(EventEmitterService)

  goBack(): void {
    this.router.navigate(['/storebooks/customer/home']);
  }

}
