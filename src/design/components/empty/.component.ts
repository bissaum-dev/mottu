import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pages } from '@/app/.types';

@Component({
  selector: 'ui-empty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class EmptyComponent {
  @Input() heading = '';
  @Input() text = '';
  @Input() link: Pages | undefined;
  @Input() button: string | undefined;

  constructor(private router: Router) {}

  goTo(item: Pages) {
    this.router.navigate([item]);
  }
}
