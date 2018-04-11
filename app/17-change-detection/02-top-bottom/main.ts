import '@jlg-example-angular-common/style.scss';
// Read the blog https://netbasal.com/sexier-imports-in-typescript-e3c645bdd3c6
// import '@jlg-example-angular-common/style.scss';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// import { enableProdMode } from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
console.log('Hello world!');
