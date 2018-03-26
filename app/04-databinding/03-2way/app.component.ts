import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>2 ways binding</h1>
<input [(ngModel)]="myName">
<input [(ngModel)]="myName">
{{myName}}
`,
})
export class AppComponent { myName = 'Angular'; }
