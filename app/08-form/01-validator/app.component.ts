import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://gist.githubusercontent.com/SiamKreative/f1074ed95507e69d08a0/raw/bbf2c9dbb156eef1cebf37c8846331f3f3493fa6/french-regions-departments.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  beforeSubmit: boolean = true;
  firstname: string = '';
  region: string = undefined;
  age: number;
  regions: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(url).delay(2000).subscribe({
      next: data => {
        this.regions = Object.keys(data['regions']);
      },
      error: err => console.log('error', err),
    });
  }

  onSubmit() {
    console.log('submiting the form');
    this.firstname = '';
    this.region = '';
    this.age = undefined;
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
