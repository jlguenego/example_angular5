import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Structural Directive</h1>
<div *jlgTimes="i">hello</div>
`,
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
