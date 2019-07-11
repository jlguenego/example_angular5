import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[jlg-draggable]'
})
export class JLGDraggableDirective {

  startX = 0;
  startY = 0;
  x = 0;
  y = 0;


  constructor(private element: ElementRef) { }

  ngOnInit() {
    console.log('directive draggable init');
    const style = this.element.nativeElement.style;
    style.position = 'relative';
    style.border = '1px solid red';
    style.cursor = 'move';
    style.padding = '1em';
    style.margin = '1em 0.5em';
    if (this.doesHighlight) {
      style.backgroundColor = this.color;
    }
  }
  private _doesHighlight: boolean = true;
  @Input('jlg-draggable') set doesHighlight(val) {
    console.log('val', val);
    console.log('typeof val', typeof val);
    this._doesHighlight = val;
  }

  get doesHighlight() {
    return this._doesHighlight;
  }

  @Input('bg-color') color: string = 'lightgrey';

  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    console.log('mousedown', event);
    event.preventDefault();
    this.startX = event.pageX - this.x;
    this.startY = event.pageY - this.y;

    const mousemove = (event) => {
      this.y = event.pageY - this.startY;
      this.x = event.pageX - this.startX;
      this.element.nativeElement.style.top = this.y + 'px';
      this.element.nativeElement.style.left = this.x + 'px';
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    }

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
  }


}