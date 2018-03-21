import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Structural Directive</h1>
<span [jlg-draggable]>I am draggable</span>
<span [jlg-draggable]="false">And me too!</span>
`,
})
export class AppComponent { 
  
}
