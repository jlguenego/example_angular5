import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>2 ways binding</header>
<input [(ngModel)]="myName">
<input bindon-ngModel="myName">
{{myName}}
`,
})
export class AppComponent { myName = 'Angular'; }
