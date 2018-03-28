import { Component, Output, EventEmitter, Input } from '@angular/core';

export interface CounterData {
  count: number,
  name: string,
}

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

  @Input() name: string;

  myCount: number = 0;

  @Output() count = new EventEmitter<CounterData>();
    
  increment() {
    console.log('increment');
    this.myCount++;
    this.count.emit({count: this.myCount, name: this.name});
  }

}


