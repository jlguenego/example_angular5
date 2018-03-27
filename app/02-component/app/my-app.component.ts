import { Component, OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './my-app.component.html',
})
export class MyAppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  message = '';

  on: boolean = true;

  ngOnInit() {
    // run as a post constructor
    console.log('MyAppComponent: ngOnInit');
    Observable.interval(1000).take(2).map(n => ['Angular', 'Angular is Good'][n]).subscribe(str => this.message = str);
    Observable.of(false).delay(3000).subscribe(n => this.on = n);
  }

  ngOnChanges() {
    // will never be run because there is no @Input.
    console.log('MyAppComponent: ngOnChanges');
  }

  ngDoCheck() {
    console.log('MyAppComponent: ngDoCheck, message=|%s|, on=|%s|', this.message, this.on);
  }

  ngAfterContentInit() {
    console.log('MyAppComponent: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('MyAppComponent: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('MyAppComponent: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('MyAppComponent: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('MyAppComponent: ngOnDestroy');
  }


}
