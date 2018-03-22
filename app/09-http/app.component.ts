import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  template: `
<h1>Http</h1>
<button (click)="onClick()">Click me!</button>
<button (click)="onClick2()">Click me also!</button>
<button (click)="reset()">Reset</button>
<div>{{message}}</div>
`,

})
export class AppComponent { 

  message: string;

  constructor(private http: HttpClient) { }

  onClick() {
    console.log('call the JSON');
    this.http.get('./data.json').subscribe({
      next: (data) => {
        console.log('data', data);
        this.message = data['content'];
      },
      error: e => console.error('error', e)
    });
  }

  onClick2() {
    console.log('call the JSON the good old AngularJS way...');
    this.http.get('./data.json').toPromise().then((data) => {
      console.log('data', data);
      this.message = data['content'];
    }).catch(e => console.error('error', e));
  }

  reset() {
    this.message = '';
  }
 }
