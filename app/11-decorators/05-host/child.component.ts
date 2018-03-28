import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { JLGService, JLGChildService } from './jlg.service';

@Component({
  selector: 'child',
  template: `
  <div>
I am the child.
</div>
`,
  providers: [
    { provide: JLGService, useClass: JLGChildService }
  ],
})
export class ChildComponent {

  // Host is the component which uses <ng-content>.
  // Note: the host word is chosen beacause it reminds us the scoped CSS.

  // By default, precedence is this, host, parent, module.

  // @Host will never get the module service
  // @Host precedence: this, host.

  // @Self will get only this component service, defined in this component.

  // @SkipSelf will not get this component service,
  // SkipSelf precedence: host, parent, module. 
  // so he will get the parent component service, or host component service, then module service

  constructor(

    @Host()
    @Optional()
    private jlg1: JLGService,

    @Self()
    @Optional()
    private jlg2: JLGService,

    @SkipSelf()
    @Optional()
    private jlg3: JLGService,
  ) {
    console.log('jlg host', jlg1);
    console.log('jlg self', jlg2);
    console.log('jlg skipself', jlg3);
  }
}
