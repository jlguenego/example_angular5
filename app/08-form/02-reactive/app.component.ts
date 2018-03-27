import { Component } from '@angular/core';
import { Person } from './person';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RegionService } from './region.service';
import { ageValidator } from '../01-template-driven/age.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  beforeSubmit: boolean = true;

  person: Person = new Person();



  f = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, ageValidator(80)]),
    region: new FormControl('', [Validators.required]),
  });

  constructor(private regionService: RegionService) { }

  onSubmit() {
    console.log('submiting the form');
    this.person.firstname = '';
    this.person.region = '';
    this.person.age = undefined;
    this.beforeSubmit = false;
  }

  checkValidity(f) {
    console.log('f', f);
    return f.invalid;
  }

  goBack() {
    this.beforeSubmit = true;
  }

}
