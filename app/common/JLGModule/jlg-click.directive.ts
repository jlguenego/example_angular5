import { Directive, Input, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[jlg-click]'
})
export class JLGClickDirective {

  constructor(private element: ElementRef) { }

  @Input('jlg-click') jlgClick: () => Promise<any>;

  @HostListener('click') onClick() {
    this.element.nativeElement.disabled = true;
    this.jlgClick().catch(() => { }).then(() => {
      this.element.nativeElement.disabled = false;
    });
  }

}
