import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../../features/models/user.model';
import { EventEmitterService } from '../../../../features/services/event-emitter.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  user!: User;
  eventEmitterService = inject(EventEmitterService);

  isCollapsed = true;
  private collapseTimeout: any;



  ngOnInit(): void {
    this.user = this.eventEmitterService.getUser();
    this.eventEmitterService.userChanged.subscribe(user => {
      this.user = user;
    });
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



}
