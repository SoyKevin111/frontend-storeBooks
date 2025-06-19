import { Component, inject, Inject, OnInit } from '@angular/core';
import { User } from '../../../../features/models/user.model';
import { EventEmitterService } from '../../../../features/services/event-emitter.service';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent implements OnInit {



  user!: User;

  eventEmitterService = inject(EventEmitterService);

  ngOnInit(): void {
    this.user = this.eventEmitterService.getUser();
    this.eventEmitterService.userChanged.subscribe(user => {
      this.user = user;
    });
  }

  toggleUser(): void {
    this.eventEmitterService.toggleUser();
  }

}
