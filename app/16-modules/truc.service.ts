import { Injectable } from '@angular/core';

let id = 1;

@Injectable()
export class TrucService {
    id: number;
    constructor() {
        this.id = id;
        id++;
        console.log('I am TrucService', this.id);
    }
}