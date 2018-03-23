import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  baseUrl: string

  constructor(private http: HttpClient) { }

  getUrl(resourceName: string) {
    const url = this.baseUrl + '/' + resourceName + 's';
    console.log('url', url);
    return url;
  }

  retrieveAll(resourceName: string) {
    console.log('retrieveAll');
    this.http.get(this.getUrl(resourceName)).subscribe(data => console.log(data));
  }

  deleteAll(resourceName: string) {
    console.log('create');
    this.http.delete(this.getUrl(resourceName)).subscribe(data => console.log(data));
  }

  create(resourceName: string, content: object) {
    console.log('create');
    this.http.post(this.getUrl(resourceName), content).subscribe(data => console.log(data));
  }



}
