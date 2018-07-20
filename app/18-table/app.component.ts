import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  things = [{
    name: 'TV',
    color: 'blue'
  }, {
    name: 'Radio',
    color: 'red'
  }, {
    name: 'Phone',
    color: 'green'
  }, {
    name: 'Computer',
    color: 'yellow'
  },

  ];
}
