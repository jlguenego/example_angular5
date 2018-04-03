import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header>Hello {{name}}</header>`,
})
export class AppComponent  { name = 'Angular !!!'; }

console.log('AppComponent %O', AppComponent);

