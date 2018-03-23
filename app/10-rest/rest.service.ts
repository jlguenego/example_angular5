import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const log = response => {
  console.log('response', response);
  return response;
};

export interface RestResponse {
  content: Object
}


@Injectable()
export class RestService {


  baseUrl: string

  constructor(private http: HttpClient) { }

  getUrl(resourceName: string) {
    const url = this.baseUrl + '/' + resourceName + 's';
    console.log('url', url);
    return url;
  }

  retrieveAll(resourceName: string): Promise<Object> {
    console.log('retrieveAll');
    return this.http.get(this.getUrl(resourceName)).toPromise().then(log);
  }

  deleteAll(resourceName: string): Promise<Object> {
    console.log('create');
    return this.http.delete(this.getUrl(resourceName)).toPromise().then(log);
  }

  create(resourceName: string, content: object): Promise<Object> {
    console.log('create');
    return this.http.post(this.getUrl(resourceName), content).toPromise().then(log);
  }

  retrieve(resourceName: string, id: number): Promise<Object> {
    console.log('retrieve ', id);
    return this.http.get(this.getUrl(resourceName) + `/${id}`).toPromise().then(log);
  }

  update(resourceName: string, id: number, content: object): Promise<Object> {
    console.log('update ', id);
    return this.http.put(this.getUrl(resourceName) + `/${id}`, content).toPromise().then(log);
  }

  delete(resourceName: string, id: number): Promise<Object> {
    console.log('delete ', id);
    return this.http.delete(this.getUrl(resourceName) + `/${id}`).toPromise().then(log);
  }



}
