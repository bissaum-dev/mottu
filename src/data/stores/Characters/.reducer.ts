import { createReducer, on } from '@ngrx/store';
import { AddFavorites, RemoveFavorites } from '@/stores/Characters/.actions';
import { CharacterSchema } from '@/app/.types';
import { unifyCharacters } from '@/utils/unifyCharacters';

export const initialState: CharacterSchema[] = unifyCharacters(JSON.parse(localStorage.getItem('FavoriteStorage') ?? '[]'));

export const FavoriteStore = createReducer(
  initialState,
  on(AddFavorites, (state, { item }) => {
    const added = [...state, item]
    unifyCharacters(added)
    localStorage.setItem('FavoriteStorage', JSON.stringify(added))
    return added
  }),
  on(RemoveFavorites, (state, { item }) => {
    const removed = state.filter(d => d.id !== item.id)
    localStorage.setItem('FavoriteStorage', JSON.stringify(removed))
    return removed
  })
);
