import { createAction, props } from '@ngrx/store';
import { CharacterSchema } from '@/app/.types';

export const addFavorites = createAction('[Favorites] add', props<{ item: CharacterSchema }>());
export const removeFavorites = createAction('[Favorites] remove', props<{ item: CharacterSchema }>());
