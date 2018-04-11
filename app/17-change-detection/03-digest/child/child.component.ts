import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ApplicationRef } from '@angular/core';

@Component({
  selector: 'jlg-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {

  constructor(private cd: ChangeDetectorRef) {}

  counter: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.counter++;

      // should throw an error
      // this.cd.checkNoChanges();

      // local digest
      this.cd.detectChanges();

      // global digest
      // this.cd.markForCheck();
      console.log('tick');
    }, 1000);
  }

  update() {
    // run a global digest.
  }
 

}
