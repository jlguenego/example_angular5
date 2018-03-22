import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  template: `
<h1>Http</h1>
<button (click)="onClick()">Click me!</button><button (click)="reset()">Reset</button>
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

  reset() {
    this.message = '';
  }
 }
