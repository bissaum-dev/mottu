import { createReducer, on } from '@ngrx/store';
import { addFavorites, removeFavorites } from './.actions';
import { CharacterSchema } from '@/app/.types';

export const initialState: CharacterSchema[] = [];

export const FavoriteReducer = createReducer(
  initialState,
  on(addFavorites, (state, { item }) => [...state, item]),
  on(removeFavorites, (state, { item }) => state.filter(d => d.id !== item.id))
);
