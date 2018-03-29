import { Component, OnInit } from '@angular/core';
import { RestService } from '../../jlg-misc/rest.service';

@Component({
  selector: 'jlg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  resourceName = 'ticket';
  newTicket = {
    id: undefined,
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
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

  retrieve(): Promise<any> {
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
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
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

}
