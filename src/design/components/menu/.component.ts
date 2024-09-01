import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/button/.component';

type MenuItem = 'inicio' | 'favoritos'

@Component({
  selector: 'ui-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class MenuComponent {
  isActive: Record<MenuItem, boolean> = {
    inicio: true,
    favoritos: false
  };

  setActive(item: MenuItem) {
    Object.entries(this.isActive).forEach(([key, _value]) => {
      this.isActive[key as MenuItem] = false;
    });
    this.isActive[item] = !this.isActive[item];
  }

  goTo(item: MenuItem) {
    this.setActive(item);

    switch(item) {
      case 'inicio':
        console.log(1);
        break;

      case 'favoritos':
        console.log(2);
        break;
    }
  }
}
