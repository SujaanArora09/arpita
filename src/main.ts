// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SelfmadeAppModule } from './app/app.module';  // Changed to SelfmadeAppModule

platformBrowserDynamic().bootstrapModule(SelfmadeAppModule)
  .catch(err => console.error(err));
