import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Interpolation binding</h1>
{{myName}}
`,
})
export class AppComponent { myName = 'Angular'; }
