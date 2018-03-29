// import footerHtml from './tmpl/footer.html';

// (function () {
//     var app = angular.module('jlg-layout', []);

//     app.directive('jlgHeader', function () {
//         return {
//             templateUrl: './jlg-layout/tmpl/header.html',
//         };
//     });

//     app.component('jlgBody', {
//         templateUrl: './jlg-layout/tmpl/body.html',
//     });

//     app.component('jlgFooter', {
//         template: footerHtml,
//         controller: function () {
//             this.now = new Date().getFullYear();
//         },
//     });
// })();

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';
import { JLGRouteModule } from '../jlg-route/jlg-route.module';

@NgModule({
    imports: [CommonModule, JLGRouteModule],
    declarations: [HeaderComponent, FooterComponent, BodyComponent],
    providers: [

    ],
    exports: [HeaderComponent, FooterComponent, BodyComponent],
})
export class JLGLayoutModule { }
