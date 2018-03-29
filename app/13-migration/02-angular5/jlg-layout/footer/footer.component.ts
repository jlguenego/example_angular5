import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jlg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  now: number = new Date().getFullYear();
}
