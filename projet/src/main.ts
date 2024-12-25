import { APP_INITIALIZER, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes'; // Les routes de l'application
import { environment } from './environment';
import { KeycloakService } from './app/service/keycloak.service';
import { RecommendationsComponent } from './app/recommendations/recommendations.component'; // Importation du composant
import { AppComponent } from './app/app.component';

// Fonction d'initialisation de Keycloak
export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}

if (environment.production) {
  enableProdMode();
}

// Initialisation de l'application avec le composant RecommendationsComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Fournisseur de routes
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    }
  ],
}).catch(err => console.error(err));
