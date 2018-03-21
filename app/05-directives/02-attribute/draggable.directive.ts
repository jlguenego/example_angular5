import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {

  startX: number = 0;
  startY: number = 0;
  x: number = 0;
  y: number = 0;


  constructor(private element: ElementRef) { }

  ngOnInit() {
    console.log('directive draggable init');
    const style = this.element.nativeElement.style;
    style.position = 'relative';
    style.border = '1px solid red';
    style.backgroundColor = 'lightgrey';
    style.cursor = 'pointer';
  }

  @Input('draggable') doesHighlight: boolean;

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