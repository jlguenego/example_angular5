import { Component } from '@angular/core';
import { angularObservable } from '@jlg-example-angular-common/observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent { 
  myArray = [1, 2, 3, 'coucou'];
  now = new Date();
  angularObservable = angularObservable;
 }
