import { Component } from '@angular/core';
import { LogoComponent } from '@/components/logo/.component';
import { MenuComponent } from '@/components/menu/.component';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [LogoComponent, MenuComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class HeaderComponent {}
