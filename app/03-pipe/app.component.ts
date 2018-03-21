import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>List: {{myArray | join: ';'}}</h1>
<h1>Time: {{now | date}}</h1>

`,
})
export class AppComponent { 
  myArray = [1, 2, 3, 'coucou'];
  now = new Date();
 }
