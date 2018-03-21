import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Interpolation binding</h1>
{{myName}}
`,
})
export class AppComponent { 
  myName = 'Angular'; 
  i = 0;

  ngOnInit() {
    console.log('init the component');
    setInterval(() => {
      this.i++;
      this.myName = `Angular ${this.i}`;
    }, 1000);
  }
}
