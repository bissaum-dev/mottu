import { Routes } from '@angular/router';
import { HomeApp } from './home/.component';
import { FavoritesApp } from './favorites/.component';

export const RoutesApp: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeApp },
  { path: 'favorites', component: FavoritesApp }
];
