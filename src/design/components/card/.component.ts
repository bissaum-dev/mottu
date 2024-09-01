import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class CardComponent {
  @Input() image = '';
  @Input() name = '';
  @Input() species = '';
  @Input() isFavorite: boolean = false;
  @Output() changeFavorite: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.changeFavorite.emit(this.isFavorite);
  }
}
