import { createAction, props } from '@ngrx/store';
import { CharacterSchema } from '@/app/.types';

export const AddFavorites = createAction('[Favorites] add', props<{ item: CharacterSchema }>());
export const RemoveFavorites = createAction('[Favorites] remove', props<{ item: CharacterSchema }>());
