import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<span>
<header>Interpolation binding</header>
<p style="font-size: 4em;">
{{myName}}
</p>
</span>
`,
})
export class AppComponent { 
  myName = 'Angular 0'; 
  i = 0;

  ngOnInit() {
    console.log('init the component');
    setInterval(() => {
      this.i++;
      this.myName = `Angular ${this.i}`;
    }, 1000);
  }
}
