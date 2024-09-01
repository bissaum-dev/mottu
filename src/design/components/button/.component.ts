import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class ButtonComponent {
  @Input() label = 'Click me';
  @Input() active = false;
  @Input() icon = '';
  @Input() count = 0;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
