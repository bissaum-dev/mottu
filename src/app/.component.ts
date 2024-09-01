import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header/.component';
import { HeadingComponent } from '@/components/heading/.component';
import { SearchComponent } from '@/components/search/.component';
import { EmptyComponent } from '@/components/empty/.component';
import { CardComponent } from '@/components/card/.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeadingComponent, SearchComponent, EmptyComponent, CardComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class AppComponent {
  title = 'mottu';

  setFavorite(hasFavorite: boolean) {
    console.log(hasFavorite)
  }
}
