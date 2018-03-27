import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input() message: string;

  ngOnInit(): void {
    // run after ngOnChanges
    console.log('ChildComponent: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('ChildComponent: ngOnDestroy');
  }
}
