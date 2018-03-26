import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Look at this image</header>
<div>
  <img [src]="niceImageUrl">
</div>
`,
<<<<<<< HEAD
  styleUrls: ['./app.component.css'],
=======
  styles: [`
img {
  width: 400px;
  animation: fade-in 5s;
}
div {
  text-align: center;
}
`],
>>>>>>> 6ff5ec4a3bb52df257150f6644637e77356249b2
})
export class AppComponent {
  niceImageUrl = '../../assets/chateau.jpg';
}
