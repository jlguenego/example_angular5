import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://gist.githubusercontent.com/SiamKreative/f1074ed95507e69d08a0/raw/bbf2c9dbb156eef1cebf37c8846331f3f3493fa6/french-regions-departments.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  firstname: string = '';
  region: string = undefined;
  regions: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(url).subscribe({
      next: data => {
        this.regions = Object.keys(data['regions']);
      },
      error: err => console.log('error', err),
    });
  }

  onSubmit() {
    console.log('submiting the form');
    alert('Success!');
  }

  checkValidity(f) {
    // console.log('f', f);
    return f.invalid;
  }

}
