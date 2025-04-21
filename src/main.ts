import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './app/enviroinment/environment.prod';


if ('serviceWorker' in navigator && environment.production) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('ngsw-worker.js').then(
      (registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      (err) => {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
