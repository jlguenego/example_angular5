import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RestResponse {
  content: Object
}

const log = (response: RestResponse): RestResponse => {
  console.log('response', response);
  return response;
};


@Injectable()
export class RestService {


  baseUrl: string

  constructor(private http: HttpClient) { }

  getUrl(resourceName: string) {
    const url = this.baseUrl + '/' + resourceName + 's';
    console.log('url', url);
    return url;
  }

  retrieveAll(resourceName: string): Promise<RestResponse> {
    console.log('retrieveAll');
    return this.http.get<RestResponse>(this.getUrl(resourceName)).toPromise().then(log);
  }

  deleteAll(resourceName: string): Promise<RestResponse> {
    console.log('create');
    return this.http.delete<RestResponse>(this.getUrl(resourceName)).toPromise().then(log);
  }

  create(resourceName: string, content: object): Promise<RestResponse> {
    console.log('create');
    return this.http.post<RestResponse>(this.getUrl(resourceName), content).toPromise().then(log);
  }

  retrieve(resourceName: string, id: number): Promise<RestResponse> {
    console.log('retrieve ', id);
    return this.http.get<RestResponse>(this.getUrl(resourceName) + `/${id}`).toPromise().then(log);
  }

  update(resourceName: string, id: number, content: object): Promise<RestResponse> {
    console.log('update ', id);
    return this.http.put<RestResponse>(this.getUrl(resourceName) + `/${id}`, content).toPromise().then(log);
  }

  delete(resourceName: string, id: number): Promise<RestResponse> {
    console.log('delete ', id);
    return this.http.delete<RestResponse>(this.getUrl(resourceName) + `/${id}`).toPromise().then(log);
  }



}
