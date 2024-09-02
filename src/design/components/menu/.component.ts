import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ButtonComponent } from '@/components/button/.component';
import { Pages, CharacterSchema } from '@/app/.types';

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class MenuComponent {
  Favorites$: Observable<CharacterSchema[]>

  constructor(private router: Router, private store: Store<{ favorite: CharacterSchema[] }>) {
    this.Favorites$ = store.select('favorite');
  }

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
