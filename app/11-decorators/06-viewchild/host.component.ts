import { Component, ViewChild, OnInit, AfterContentInit, AfterViewInit, ViewChildren, ContentChildren, ContentChild } from '@angular/core';
import { ChildComponent } from './child.component';
import { TotoComponent } from './toto.component';
import { QueryList } from '@angular/core';

// ShadowDOM: every elements that are in the template, except <ng-content> and its content.
// LightDOM: every elements that are in the <ng-content> element.

@Component({
  selector: 'host',
  template: `
<span>I am the Host</span>
<toto name="t1"></toto>
<toto name="t2"></toto>
<ng-content></ng-content>
`,
})
export class HostComponent implements OnInit, AfterContentInit, AfterViewInit {
  // ViewChild looks into the ShadowDOM
  @ViewChild(TotoComponent) firstViewChild: TotoComponent;
  @ViewChildren(TotoComponent) ViewChildren: QueryList<TotoComponent>;

  // ContentChild looks into the LightDOM
  @ContentChild(ChildComponent) firstContentChild: ChildComponent;
  @ContentChildren(ChildComponent) ContentChildren: QueryList<ChildComponent>;

  constructor() {
    console.log('constructor firstViewChild', this.firstViewChild);
    console.log('constructor ViewChildren', this.ViewChildren);

    console.log('constructor firstContentChild', this.firstContentChild);
    console.log('constructor ContentChildren', this.ContentChildren);
  }

  ngOnInit() {
    console.log('ngOnInit firstViewChild', this.firstViewChild);
    console.log('ngOnInit ViewChildren', this.ViewChildren);

    console.log('ngOnInit firstContentChild', this.firstContentChild);
    console.log('ngOnInit ContentChildren', this.ContentChildren);

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit firstViewChild', this.firstViewChild);
    console.log('ngAfterContentInit ViewChildren', this.ViewChildren);

    console.log('ngAfterContentInit firstContentChild', this.firstContentChild);
    console.log('ngAfterContentInit ContentChildren', this.ContentChildren);

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit firstViewChild', this.firstViewChild);
    console.log('ngAfterViewInit ViewChildren', this.ViewChildren);

    console.log('ngAfterViewInit firstContentChild', this.firstContentChild);
    console.log('ngAfterViewInit ContentChildren', this.ContentChildren);

    // will generate a check error if we stay in the same task
    // macro task 
    // setTimeout(() => {
    //   this.ViewChildren.forEach(c => c.parentName = 'host');
    // }, 0);

    // micro task
    Promise.resolve().then(() => {
      this.ViewChildren.forEach(c => c.parentName = 'host');
    });


  }
}
