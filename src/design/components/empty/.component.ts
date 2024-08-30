import { Component } from '@angular/core';

@Component({
  selector: 'ui-empty',
  standalone: true,
  imports: [],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class EmptyComponent {
  name = 'Empty';
}
