import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, PaginationComponent],
  templateUrl: './book-container.component.html',
  styleUrl: './book-container.component.scss'
})
export class BookContainerComponent {

}
