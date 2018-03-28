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
  // @Host will get the parent service only if it is projected target with ng-content (light dom)
  // you have to see "host" like the ":host" in Scoped CSS
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
    console.log('jlg skipself', jlg2);
  }
}
