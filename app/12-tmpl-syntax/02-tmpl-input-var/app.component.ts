import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Structural Directive</header>
  <div *jlgTimes="n; let i=index">hello {{i}}</div>
`,
styles: [
  `
  div {
    padding: 0 1em;
  }
  `
]
})
export class AppComponent { 
  n = 1;
  ngOnInit() {
    console.log('init app');
    setInterval(() => {
      this.n++;
      if (this.n > 10) {
        this.n = 1;
      }
    }, 1000);
  }
}
