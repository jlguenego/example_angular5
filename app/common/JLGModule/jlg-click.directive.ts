import { Directive, Input, HostListener, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[jlg-click]'
})
export class JLGClickDirective {

  constructor(private element: ElementRef) { 
    console.log('jlg-click constructor');
  }

  ngOnInit() {
    console.log('jlg-click init');
  }

  @Input('jlg-click') jlgClick: () => Promise<any>;

  @HostListener('click') onClick() {
    console.log('click', this.jlgClick);
    this.element.nativeElement.disabled = true;
    this.jlgClick().then(() => {
      console.log('ok');
      this.element.nativeElement.disabled = false;
    }).catch(() => {
      console.log('ko');
      this.element.nativeElement.disabled = false;
    });
  }

}
