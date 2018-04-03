import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about-view',
  template: `
<h1>About</h1>
<section>
  <address>
    <br> {{title}}
    <br> 99 rue de Paris 
    <br> Batiment A, 1er étage 
    <br> 77200 TORCY
    <br> FRANCE 
    <br> Mail: <a href="mailto:#">toto@titi.com</a>
    <br> Tel: <a href="tel:+33102030405">+33 1.02.03.04.05</a>
  </address>
</section>
`,
})
export class AboutComponent {
  title: string;
  constructor(private route: ActivatedRoute, private titleService: Title) {
    route.data.map(p => p.title).subscribe(title => this.title = title);
    this.titleService.setTitle('About');
  }
}


