import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
       provideZoneChangeDetection({ eventCoalescing: true }), 
       provideHttpClient(),
       provideRouter(routes), 
       provideStore(), 
       provideEffects()
      ]
};
