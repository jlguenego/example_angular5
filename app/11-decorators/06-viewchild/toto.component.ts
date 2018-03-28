import { Component, Input } from '@angular/core';

@Component({
  selector: 'toto',
  template: `
<div>
I am toto {{name}}, my parent is {{parentName}}
</div>
`,
})
export class TotoComponent {
  @Input() name: string;
  parentName: string = 'coucou';
}
