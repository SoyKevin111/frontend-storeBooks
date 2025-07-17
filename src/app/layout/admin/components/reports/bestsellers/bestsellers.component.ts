import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockBestSellers } from '../../../../../features/mocks/reports-data.mock';
import { RandomColorEmojiService } from '../../../../../shared/services/random-color-emoji.service';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {

  color = inject(RandomColorEmojiService);

  data$ = mockBestSellers;

}
