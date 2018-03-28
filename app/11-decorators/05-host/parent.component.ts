import { Component } from '@angular/core';
import { JLGService, JLGParentService } from './jlg.service';

@Component({
  selector: 'parent',
  template: `
<span>I am the parent</span>
<ng-content></ng-content>
`,
// try with viewProviders: it give no access to children !
  // viewProviders: [
  providers: [
    { provide: JLGService, useClass: JLGParentService }
  ],
})
export class ParentComponent {
 
}
