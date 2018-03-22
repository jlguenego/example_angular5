import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Http</h1>
<button></button>
`,
})
export class AppComponent { 
  myArray = [1, 2, 3, 'coucou'];
  now = new Date();
 }
