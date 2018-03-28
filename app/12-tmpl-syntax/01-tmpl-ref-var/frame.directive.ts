import { Directive, Input, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[frame]',
  exportAs: 'frameKiki'
})
export class FrameDirective {

  constructor(private element: ElementRef) { }
  color: string = "blue";

  ngOnInit() {
    this.element.nativeElement.style.padding = '1em';
  }

  @HostListener('click') onClick() {
    if (this.color === "blue") {
      this.color = "red";
    } else {
      this.color = "blue";
    }
    this.element.nativeElement.style.border = '1px solid ' + this.color;
  }

}
