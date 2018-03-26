import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Look at this image</header>
<div>
  <img [src]="niceImageUrl">
</div>
`,
  styles: [`
img {
  width: 400px;
  animation: fade-in 5s;
}
div {
  text-align: center;
}
`],
})
export class AppComponent {
  niceImageUrl = '../../assets/chateau.jpg';
}
