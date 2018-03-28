import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Template reference variable</header>
<section>
<input (input)="update(myVar, myHello.message)" #myVar ><br>
<p>#myVar: {{myVar.value}}</p>



<hello #myHello></hello>
<p>#myHello: {{myHello.message}} </p>



<div frame #myFrame="frameKiki">Click on me...</div>
<p>#myFrame: {{myFrame.color}} </p>
</section>
`,
})
export class AppComponent {
  update(myVar, myHello) {
    console.log('myVar %O', myVar.value);
    console.log('myHello %O', myHello.value);
  }
}
