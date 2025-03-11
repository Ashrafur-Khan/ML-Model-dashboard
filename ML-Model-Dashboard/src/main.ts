import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarNavComponent } from './app/components/sidebar-nav/sidebar-nav.component';
import { HeaderBarComponent } from './app/components/header-bar/header-bar.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule) // Required for PrimeNG animations
  ]
}).catch(err => console.error(err));
  