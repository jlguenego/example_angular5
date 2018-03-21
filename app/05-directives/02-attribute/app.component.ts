import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Structural Directive</h1>
<span [draggable]>I am draggable</span>
<span [draggable]>And me too!</span>
`,
})
export class AppComponent { 
  
}
