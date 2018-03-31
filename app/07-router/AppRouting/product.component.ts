import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'product-view',
  template: `
<h1>Product</h1>
<section>
  Product {{id}}
</section>
`,
})
export class ProductComponent {
  constructor(private route: ActivatedRoute, private titleService: Title) {
    const id: Observable<string> = route.params.map(p => p.id);
    id.subscribe(s => {
      this.id = +s;
      this.titleService.setTitle('Product ' + this.id);
    });
    
  }
  id;
  
}
