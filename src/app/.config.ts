import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { RoutesApp } from './.routes';
import { FavoriteReducer } from '../stores/Characters/.reducer'

export const ConfigApp: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(RoutesApp),
    provideStore({ favorite: FavoriteReducer })
  ]
};
