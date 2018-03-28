import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {

  @Input('first-name') firstName: string;
  @Input() lastName: string;
  @Input() set city(value: string) {
    console.log('about to set the city to', value);
    this._city = value;
  };

  get city() {
    console.log('getting the city');
    // const err = new Error();
    // console.log(err.stack);
    return this._city;
  }
  private _city: string;
}
