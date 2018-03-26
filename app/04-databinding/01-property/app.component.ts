import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Look at this image</h1>
<img [src]="niceImageUrl">
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  niceImageUrl = '../../assets/chateau.jpg';
}
