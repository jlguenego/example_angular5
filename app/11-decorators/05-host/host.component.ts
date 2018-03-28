import { Component } from '@angular/core';
import { JLGService, JLGHostService } from './jlg.service';

@Component({
  selector: 'host',
  template: `
<span>I am the Host</span>
<ng-content></ng-content>
`,
// try with viewProviders: it give no access to children !
  // viewProviders: [
  providers: [
    { provide: JLGService, useClass: JLGHostService }
  ],
})
export class HostComponent {
 
}
