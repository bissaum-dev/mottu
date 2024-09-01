import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { RoutesApp } from '@/app/.routes';
import { DataStores } from '@/stores/index';

export const ConfigApp: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(RoutesApp),
    provideStore({ favorite: DataStores.Characters.Store })
  ]
};
