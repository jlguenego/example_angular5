import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  firstname: string = '';

  onSubmit() {
    console.log('submiting the form');
  }

  checkValidity (f) {
    // console.log('f', f);
    return f.invalid;
  }
}
