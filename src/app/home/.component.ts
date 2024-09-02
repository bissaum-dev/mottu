import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@/components/header/.component';
import { HeadingComponent } from '@/components/heading/.component';
import { SearchComponent } from '@/components/search/.component';
import { EmptyComponent } from '@/components/empty/.component';
import { CardComponent } from '@/components/card/.component';
import { Service } from '@/services/index';
import { CharacterOptions, CharacterSchema } from '@/app/.types';
import { AddFavorites, RemoveFavorites } from '@/stores/Characters/.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeadingComponent, SearchComponent, EmptyComponent, CardComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class HomeApp {
  Favorites$: Observable<CharacterSchema[]>
  Characters = [] as CharacterSchema[]

  constructor(private store: Store<{ favorite: CharacterSchema[] }>) {
    this.Favorites$ = store.select('favorite');
  }

  private CharactersOption: CharacterOptions = {
    type: 'GraphQL',
    page: 1,
    search: ''
  }

  async ngOnInit() {
    const List = await Service.RickAndMorty.Get.Character(this.CharactersOption);
    this.Characters = List
  }

  async onScroll(event: any) {
    const scrollHeight = event.target.scrollHeight;
    const scrollTop = event.target.scrollTop;
    const clientHeight = event.target.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      await this.nextPage();
    }
  }

  async nextPage() {
    this.CharactersOption.page++;
    const List = await Service.RickAndMorty.Get.Character(this.CharactersOption);
    this.Characters = [ ...this.Characters, ...List ]
  }

  async onSearch(term: string) {
    this.CharactersOption.page = 1;
    this.CharactersOption.search = term;
    const List = await Service.RickAndMorty.Get.Character(this.CharactersOption);
    this.Characters = List;
  }

  hasFavorite(favorites: CharacterSchema[] | null, id: string) {
    return !!favorites?.some(fav => fav.id === id)
  }

  setFavorite(hasFavorite: boolean, item: CharacterSchema) {
    if(hasFavorite) {
      this.store.dispatch(AddFavorites({ item }));
    } else {
      this.store.dispatch(RemoveFavorites({ item }));
    }
  }
}
