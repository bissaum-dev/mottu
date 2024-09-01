import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-search',
  standalone: true,
  imports: [],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class SearchComponent {
  @Input() label = 'Search';
}
