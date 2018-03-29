import { Component, OnInit } from '@angular/core';
import { RestService } from '../../jlg-misc/rest.service';

@Component({
  selector: 'jlg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  resourceName = 'ticket';
  id: number = 2;
  newTicket = {
    name: undefined,
  };
  ticket = {
    id: undefined,
    name: undefined,
  }
  tickets = [];

  constructor(private rest: RestService) {
    rest.baseUrl = '../../../ws';
  }

  create(): Promise<any> {
    console.log('create', this.resourceName);
    return this.rest.create(this.resourceName, this.newTicket)
      .then(() => this.query())
      .catch(error => console.error('error', error));
  }

  retrieve(): Promise<any> {
    console.log('retrieve', this.resourceName);
    this.ticket = undefined;
    return this.rest.retrieve(this.resourceName, this.id)
      .then(resource => {
        this.ticket = resource.content;
        console.log('this.ticket', this.ticket);
      })
      .catch(error => console.error('error', error));
  }

  update(): Promise<any> {
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

  delete(): Promise<any> {
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

  query(): Promise<any> {
    console.log('query', this.resourceName);
    return this.rest.retrieveAll(this.resourceName)
      .then(response => {
        this.tickets = response.content;
        console.log('this.tickets', this.tickets);
        console.log('this', this);
      })
      .catch(error => console.error('error', error));
  }

  empty(): Promise<any> {
    console.log('deleteAll', this.resourceName);
    return this.rest.deleteAll(this.resourceName)
      .then(resources => this.tickets = [])
      .catch(error => console.error('error', error));
  }

}
