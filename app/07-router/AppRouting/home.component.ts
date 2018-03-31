import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home-view',
  template: `
<h1>Welcome to Angular!</h1>
<section>
<a href="..">Go to parent</a>
</section>
`,
})
export class HomeComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }
}
