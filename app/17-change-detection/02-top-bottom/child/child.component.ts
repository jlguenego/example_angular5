import { Component, Host, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'jlg-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, DoCheck {

  constructor(@Host() private parent: AppComponent) { }

  @Input() input: string;

  repeat: string;

  
  updateMsg(str) {
    // the error is here. Cannot update the parent while the child digests. (top->bottom)
    this.parent.message = str;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes.input);
    if (changes.input.currentValue === 'coucou') {
      this.updateMsg('Hello Angular !!!');
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.input);
    this.repeat = this.input + this.input;
  }

}
