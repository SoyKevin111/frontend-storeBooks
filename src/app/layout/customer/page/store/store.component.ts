import { Component } from '@angular/core';
import { BookContainerComponent } from '../../components/book-container/book-container.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [BookContainerComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
