import { bootstrapApplication } from '@angular/platform-browser';
import { ConfigApp } from './app/.config';
import { ComponentApp } from './app/.component';

bootstrapApplication(ComponentApp, ConfigApp).catch((err) => console.error(err));
