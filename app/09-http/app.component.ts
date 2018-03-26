import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// if you want to use toPromise() on an observable, just add this operator.
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { exponentialBackoffObservableFromPromise, exponentialBackoffObservable } from '@jlg-example-angular-common/observable';

interface DataJson {
  content: string,
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['.castle { width: 300px; }']
})
export class AppComponent {

  status: string;
  message: string;
  imageURI: SafeUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  onClick1() {
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
    this.http.get<DataJson>('./data.json', { observe: 'response' }).subscribe({
      next: (response) => {
        console.log('response', response);
        this.message = response.body.content;
        this.status = 'Status is ' + response.status;
      },
      error: e => console.error('error', e)
    });
  }

  onClick5() {
    this.reset();
    console.log('URL not found scenario.');
    this.http.get('./data2.json').catch(err => {
      console.error('error', err);
      return Observable.throw('ajax problem!')
    }).subscribe({
      next: (data) => {
        console.log('data', data);
        this.message = data['content'];
      },
      error: e => {
        console.log('error', e);
        this.message = e;
      }
    });
  }

  onClick6(): Promise<any> {
    this.reset();
    console.log('Handling the error with retry');
    const obs = this.http.get('../../ws/not-well-working');
    // exponentialBackoffObservableFromPromise(obs.toPromise.bind(obs))
    return exponentialBackoffObservable(obs).toPromise().then((data) => {
      console.log('data', data);
      if (data.error) {
        console.log('error...', data.error)
      } else {
        this.message = data.content;
      }
    });
  }

  onClick7() {
    this.reset();
    console.log('Getting the image content and expose it.');
    this.http.get('../assets/chateau.jpg', { responseType: 'blob' }).subscribe({
      next: (blob) => {
        console.log('blob', blob);
        // convert the blob to URI
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          this.imageURI = this.sanitizer.bypassSecurityTrustUrl(reader.result);
        }
      },
      error: e => {
        this.message = e;
      }
    });
  }

  onClick8() {
    this.reset();
    console.log('Request with special header.');
    this.http.get('../../ws/needs-authorization-header', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }).subscribe({
      next: (data) => {
        console.log('data', data);
        this.message = data['content'];
      },
      error: e => console.error('error', e)
    });
  }

  reset() {
    this.message = '';
    this.status = '';
    this.imageURI = undefined;
  }
}
