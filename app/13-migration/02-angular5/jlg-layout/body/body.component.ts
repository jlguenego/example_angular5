import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jlg-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
