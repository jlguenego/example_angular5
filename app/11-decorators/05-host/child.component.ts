import { Component, Host, Optional } from '@angular/core';
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

  // @Host is like @Self but will never go to look for the service on the module providers.
  constructor(
    @Host()
    @Optional()
  
  private jlg: JLGService) {
    console.log('JLGService', jlg);
  }
}
