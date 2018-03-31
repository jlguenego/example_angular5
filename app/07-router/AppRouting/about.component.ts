import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'about-view',
  template: `
<h1>About</h1>
<section>
  <address>
    <br> JLG Consulting
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
  public constructor(private titleService: Title) {
    this.titleService.setTitle('About');
  }



}


