import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Look at this image</header>
<div>
  <img [src]="niceImageUrl">
  <img bind-src="niceImageUrl">
</div>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  niceImageUrl = '../../assets/chateau.jpg';
}
