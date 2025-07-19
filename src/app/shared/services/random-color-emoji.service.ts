import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorEmojiService {

  private categoryColors = ['#FEE2E2', '#FEF3C7', '#D1FAE5', '#E0E7FF', '#F3E8FF'];
  private borderColors = ['border-red-600', 'border-yellow-500', 'border-green-600', 'border-blue-600', 'border-purple-600'];
  private emojiColors = ['#DC2626', '#CA8A04', '#16A34A', '#2563EB', '#9333EA'];

  private hash(value: string): number {
    return Array.from(value).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

  getCategoryStyle(category: string) {
    const index = this.hash(category) % this.categoryColors.length;
    return {
      backgroundColor: this.categoryColors[index],
      color: '#1F2937'
    };
  }

  getBorderColor(seed: string): string {
    const index = this.hash(seed) % this.borderColors.length;
    return this.borderColors[index];
  }

  getCardBackground(seed: string): string {
    return '#FFFFFF';
  }

  getEmojiColor(seed: string): string {
    const index = this.hash(seed) % this.emojiColors.length;
    return this.emojiColors[index];
  }
}
