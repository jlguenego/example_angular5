import './style.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

console.log('Hello world!');