import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Structural Directive</header>
  <div *jlgTimes="i">hello</div>
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
  i = 1;
  ngOnInit() {
    console.log('init app');
    setInterval(() => {
      this.i++;
      if (this.i > 10) {
        this.i = 1;
      }
    }, 1000);
  }
}
