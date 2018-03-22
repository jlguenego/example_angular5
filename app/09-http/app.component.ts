import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';

interface DataJson {
  content: string,
}

@Component({
  selector: 'my-app',
  template: `
<h1>Http</h1>
<button (click)="onClick()">Click me!</button><br>
<button (click)="onClick2()">Click me also!</button><br>
<button (click)="onClick3()">Click me v3!</button><br>
<button (click)="onClick4()">Click me v4!</button><br>
<button (click)="reset()">Reset</button>
<div>{{message}}</div>
<div>{{status}}</div>
`,

})
export class AppComponent { 

  status: string;
  message: string;

  constructor(private http: HttpClient) { }

  onClick() {
    this.reset();
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
    this.reset();
    console.log('call the JSON the good old AngularJS way...');
    this.http.get('./data.json').toPromise().then((data) => {
      console.log('data', data);
      this.message = data['content'];
    }).catch(e => console.error('error', e));
  }

  onClick3() {
    this.reset();
    console.log('solve the typing issue');
    this.http.get<DataJson>('./data.json').subscribe({
      next: (data) => {
        console.log('data', data);
        this.message = data.content;
      },
      error: e => console.error('error', e)
    });
  }

  onClick4() {
    this.reset();
    console.log('look at the full response');
    this.http.get<DataJson>('./data.json', {observe: 'response'}).subscribe({
      next: (response) => {
        console.log('response', response);
        this.message = response.body.content;
        this.status = 'Status is ' + response.status;
      },
      error: e => console.error('error', e)
    });
  }

  reset() {
    this.message = '';
    this.status = '';
  }
 }
