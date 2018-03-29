import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[jlg-click-and-disable]'
})
export class JLGClickAndDisableDirective {

  constructor(private element: ElementRef) { }

  @Input('jlg-click-and-disable') jlgClick: () => Promise<any>;

  @HostListener('click') onClick() {
    this.element.nativeElement.disabled = true;
    this.jlgClick().catch(() => { }).then(() => {
      this.element.nativeElement.disabled = false;
    });
  }

}
