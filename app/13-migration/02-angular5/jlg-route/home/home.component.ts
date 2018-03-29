import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jlg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newTicket = {
    id: undefined,
    name: undefined,
  };
  ticket = {
    id: undefined,
    name: undefined,
  }
  constructor() { }

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
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

  empty(): Promise<any> {
    return Promise.resolve().then(() => {
      console.log('coucou');
    });
  }

}
