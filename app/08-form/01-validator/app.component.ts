import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  firstname: string = '';

  onSubmit() {
    console.log('submiting the form');
    alert('Success!');
  }

  checkValidity (f) {
    // console.log('f', f);
    return f.invalid;
  }
}
