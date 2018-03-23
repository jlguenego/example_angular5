import { Component } from '@angular/core';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';

interface DataJson {
  content: string,
}

@Component({
  selector: 'my-app',
  template: `
<h1>Rest</h1>
<button (click)="retrieveAll('tickets')">Retrieve All</button><br>
<button (click)="deleteAll('tickets')">Delete All</button><br>
<input [(ngModel)]="name">
<button (click)="create('tickets')">Create</button><br>
<div>{{result | json}}</div>
`,
  providers: [
    RestService
  ]

})
export class AppComponent {

  resourceName: string = 'ticket';

  result: Object;
  name: string = 'coucou';

  constructor(private rest: RestService) {
    rest.baseUrl = '../../ws';
  }

  retrieveAll() {
    console.log('retrieveAll', this.resourceName);
    this.rest.retrieveAll(this.resourceName);
  }

  deleteAll() {
    console.log('deleteAll', this.resourceName);
    this.rest.deleteAll(this.resourceName);
  }

  create() {
    console.log('create', this.resourceName);
    const object = {
      name: this.name,
    }
    this.rest.create(this.resourceName, object);
  }

}
