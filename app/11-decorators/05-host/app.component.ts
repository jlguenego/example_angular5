import { Component } from '@angular/core';
import { JLGService } from './jlg.service';



@Component({
  selector: 'my-app',
  template: `
<header>Host</header>
Parent: 
<parent>
  <child></child>
</parent>
`,
})
export class AppComponent {
  constructor() {

  }




}
