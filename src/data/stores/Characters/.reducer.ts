import { createReducer, on } from '@ngrx/store';
import { AddFavorites, RemoveFavorites } from '@/stores/Characters/.actions';
import { CharacterSchema } from '@/app/.types';

export const initialState: CharacterSchema[] = [];

export const FavoriteStore = createReducer(
  initialState,
  on(AddFavorites, (state, { item }) => [...state, item]),
  on(RemoveFavorites, (state, { item }) => state.filter(d => d.id !== item.id))
);
