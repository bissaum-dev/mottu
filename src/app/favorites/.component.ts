import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@/components/header/.component';
import { HeadingComponent } from '@/components/heading/.component';
import { SearchComponent } from '@/components/search/.component';
import { EmptyComponent } from '@/components/empty/.component';
import { CardComponent } from '@/components/card/.component';
import { CharacterSchema } from '@/app/.types';
import { addFavorites, removeFavorites } from '@/stores/Characters/.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeadingComponent, SearchComponent, EmptyComponent, CardComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class FavoritesApp {
  Favorites: Observable<CharacterSchema[]>

  constructor(private store: Store<{ favorite: CharacterSchema[] }>) {
    this.Favorites = store.select('favorite');
  }

  setFavorite(hasFavorite: boolean, item: CharacterSchema) {
    if(hasFavorite) {
      this.store.dispatch(addFavorites({ item }));
    } else {
      this.store.dispatch(removeFavorites({ item }));
    }
  }
}
