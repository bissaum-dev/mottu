import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@/components/button/.component';
import { Pages } from '@/app/.types'

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class MenuComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.setActive(this.router.url as Pages);
  }

  isActive: Record<Pages, boolean> = {
    '/home': false,
    '/favorites': false
  }

  setActive(item: Pages) {
    Object.entries(this.isActive).forEach(([key, _value]) => {
      this.isActive[key as Pages] = false;
    });
    this.isActive[item] = !this.isActive[item];
  }

  goTo(item: Pages) {
    this.setActive(item);
    this.router.navigate([`/${item}`]);
  }
}
