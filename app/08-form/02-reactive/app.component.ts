import { Component } from '@angular/core';
import { Person } from './person';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RegionService } from './region.service';
import { ageValidator } from '@jlg-example-angular-common/JLGModule/age.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  beforeSubmit: boolean = true;

  person: Person = new Person('Jean-Louis', 432, 'lorraine');

  f: FormGroup;

  constructor(private fb: FormBuilder, private regionService: RegionService) {
    this.createForm();
    this.reset();
  }

  createForm() {
    this.f = this.fb.group({
      firstname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, ageValidator(80)]),
      region: new FormControl('', [Validators.required]),
    });
  }

  reset() {
    this.f.reset();
    this.f.setValue(this.person);
  }

  onSubmit() {
    console.log('submiting the form');
    // in one line, modify the three attributes of person.
    Object.assign(this.person, this.f.value);
    console.log('person', this.person);
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
