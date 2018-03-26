import { Component } from '@angular/core';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { RestService, RestResponse } from './rest.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [
    RestService
  ]

})
export class AppComponent {

  resourceName: string = 'ticket';
  id: number;

  resources: RestResponse;
  name: string = 'coucou';

  constructor(private rest: RestService) {
    rest.baseUrl = '../../ws';
  }

  retrieveAll() {
    console.log('retrieveAll', this.resourceName);
    return this.rest.retrieveAll(this.resourceName)
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
      .then(() => this.retrieveAll())
      .catch(error => console.error('error', error));
  }

  retrieve() {
    console.log('retrieve', this.resourceName);
    this.rest.retrieve(this.resourceName, this.id)
      .then(resource => {
        this.resources = {content:[resource.content]};
        console.log('this resources', this.resources);
      })
      .catch(error => console.error('error', error));
  }

  update(resource) {
    console.log('update', this.resourceName);
    const object = {
      name: resource.newName,
    }
    this.rest.update(this.resourceName, resource.id, object)
      .then(() => this.retrieveAll())
      .catch(error => console.error('error', error));
  }

  delete(resource) {
    console.log('delete', this.resourceName);
    this.rest.delete(this.resourceName, resource.id)
      .then(() => this.retrieveAll())
      .catch(error => console.error('error', error));
  }

}
