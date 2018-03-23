import { Component } from '@angular/core';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';



@Component({
  selector: 'my-app',
  template: `
<h1>Rest</h1>
<button (click)="retrieveAll()">Retrieve All</button><br>
<button (click)="deleteAll()">Delete All</button><br>
<input [(ngModel)]="name">
<button (click)="create()">Create</button><br>
<input type="number" [(ngModel)]="id">
<button (click)="retrieve()">Retrieve</button>
<button (click)="update()">Update</button><br>
<button (click)="delete()">Delete</button><br>

<div>{{resources | json}}</div>
`,
  providers: [
    RestService
  ]

})
export class AppComponent {

  resourceName: string = 'ticket';
  id: number;

  resources: Object;
  name: string = 'coucou';

  constructor(private rest: RestService) {
    rest.baseUrl = '../../ws';
  }

  retrieveAll() {
    console.log('retrieveAll', this.resourceName);
    this.rest.retrieveAll(this.resourceName)
      .then(resources => this.resources = resources)
      .catch(error => console.error('error', error));
  }

  deleteAll() {
    console.log('deleteAll', this.resourceName);
    this.rest.deleteAll(this.resourceName)
      .then(resources => this.resources = resources)
      .catch(error => console.error('error', error));
  }

  create() {
    console.log('create', this.resourceName);
    const object = {
      name: this.name,
    }
    this.rest.create(this.resourceName, object)
      .then(resource => console.log(`${this.resourceName} created.`))
      .catch(error => console.error('error', error));
  }

  retrieve() {
    console.log('retrieve', this.resourceName);
    this.rest.retrieve(this.resourceName, this.id)
      .then(resource => this.resources = resource)
      .catch(error => console.error('error', error));
  }

  update() {
    console.log('update', this.resourceName);
    const object = {
      name: this.name,
    }
    this.rest.update(this.resourceName, this.id, object)
      .then(resource => this.resources = resource)
      .catch(error => console.error('error', error));
  }

  delete() {
    console.log('delete', this.resourceName);
    this.rest.delete(this.resourceName, this.id)
      .then(resource => this.resources = resource)
      .catch(error => console.error('error', error));
  }

}
