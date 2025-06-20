import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../../features/models/user.model';
import { EventEmitterService } from '../../../../features/services/event-emitter.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  user!: User;
  eventEmitterService = inject(EventEmitterService);

  ngOnInit(): void {
    this.user = this.eventEmitterService.getUser();
    this.eventEmitterService.userChanged.subscribe(user => {
      this.user = user;
    });
  }


}
