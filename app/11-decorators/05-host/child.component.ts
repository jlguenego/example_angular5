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
    // { provide: JLGService, useClass: JLGChildService }
  ],
})
export class ChildComponent {

  // @Host will never get the module service
  // @Host will get the host component service. host component is never parent component.
  // Host component is the component that owns <ng-content> which this component resides in (is projected in).
  // you have to see "host" like the ":host" in Scoped CSS

  // @Self will get only this component service, defined in this component.

  // @SkipSelf will not get this component service, 
  // so he will get the parent component service, or host component service, then module service
  
  constructor(

    @Host()
    @Optional()
    private jlg: JLGService,

    @Self() 
    @Optional()
    private jlg2: JLGService,

    @SkipSelf() 
    @Optional()
    private jlg3: JLGService,
  ) {
    console.log('jlg host', jlg);
    console.log('jlg self', jlg2);
    console.log('jlg skipself', jlg3);
  }
}
