import { Component } from '@angular/core';
import { JLGService, JLGAppService } from './jlg.service';



@Component({
  selector: 'my-app',
  template: `
<header>Host</header>
Host: 
<host>
  <child></child>
</host>
`,
  providers: [
    { provide: JLGService, useClass: JLGAppService }
  ],
})
export class AppComponent {
}
