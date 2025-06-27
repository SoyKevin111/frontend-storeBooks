import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './book-container.component.html',
  styleUrl: './book-container.component.scss'
})
export class BookContainerComponent {

}
