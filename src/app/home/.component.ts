import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@/components/header/.component';
import { HeadingComponent } from '@/components/heading/.component';
import { SearchComponent } from '@/components/search/.component';
import { EmptyComponent } from '@/components/empty/.component';
import { CardComponent } from '@/components/card/.component';
import { Service } from '@/services/index';
import { CharacterOptions, CharacterSchema } from '@/app/.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeadingComponent, SearchComponent, EmptyComponent, CardComponent],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class HomeApp {
  Characters = [] as CharacterSchema[]

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

  setFavorite(hasFavorite: boolean) {
    console.log(hasFavorite)
  }
}
