import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>@ViewChild, @ViewChildren, @ContentChild, @ContentChildren</header>
Host: 
<host>
  <child></child>
</host>
`,
})
export class AppComponent {
}
