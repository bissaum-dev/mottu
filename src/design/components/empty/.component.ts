import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-empty',
  standalone: true,
  imports: [],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class EmptyComponent {
  @Input() heading = '';
  @Input() text = '';
}
