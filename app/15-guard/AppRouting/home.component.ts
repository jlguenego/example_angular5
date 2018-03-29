import { Component } from '@angular/core';
import { ConnectionGuardService } from '../connection-guard.service';

@Component({
  selector: 'home-view',
  template: `
<h1>Welcome to Angular!</h1>
<section>
<select name="mode" [(ngModel)]="service.mode">
  <option value="connected">Connected</option>
  <option value="not-connected">Not connected</option>
</select>
<br>
<br>
<br>
<a href="..">Go to parent</a>
</section>
`,
})
export class HomeComponent {
  constructor(public service: ConnectionGuardService) { }
}
