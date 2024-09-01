import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-heading',
  standalone: true,
  imports: [],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class HeadingComponent {
  @Input() text = '';
}
