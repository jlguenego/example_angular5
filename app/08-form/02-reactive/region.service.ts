import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://gist.githubusercontent.com/SiamKreative/f1074ed95507e69d08a0/raw/bbf2c9dbb156eef1cebf37c8846331f3f3493fa6/french-regions-departments.json';


@Injectable()
export class RegionService {

  public regions: string[];

  constructor(private http: HttpClient) {
    http.get(url).subscribe({
      next: data => {
        this.regions = Object.keys(data['regions']);
      },
      error: err => console.log('error', err),
    });
  }


}
