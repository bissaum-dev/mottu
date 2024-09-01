import { Routes } from '@angular/router';
import { HomeApp } from '@/app/home/.component';
import { FavoritesApp } from '@/app/favorites/.component';

export const RoutesApp: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeApp },
  { path: 'favorites', component: FavoritesApp }
];
