import { Component, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { of } from 'rxjs/observable/of';

interface HelloEvent {
  message: string;
}

@Component({
  selector: 'my-app',
  template: `
<header>HostListener</header>
Message: {{message}}
`,
})
export class AppComponent {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    console.log('AppComponent: init');
    of('Coucou Angular').delay(1000).subscribe(n => {
      console.log('create event');
      const e = new CustomEvent<HelloEvent>('hello', { detail: { message: n } });
      this.element.nativeElement.dispatchEvent(e);
    });

  }

  @HostListener('hello', ['$event']) onHello(obj: CustomEvent<HelloEvent>) {
    console.log('obj', obj);
    this.message = obj.detail.message;
  }

  message: string;
}
