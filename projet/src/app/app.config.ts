import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { KeycloakService } from './service/keycloak.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';  // Assurez-vous que le chemin est correct

export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers:[
      {
        provide: APP_INITIALIZER,
        deps: [KeycloakService],
        useFactory: kcFactory,
        multi: true
      }
    ]
})
export class AppConfig { }
