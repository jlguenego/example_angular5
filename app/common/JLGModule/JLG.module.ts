import { NgModule } from '@angular/core';
import { JLGClickDirective } from './jlg-click.directive';
import { AgeValidatorDirective } from '@jlg-example-angular-common/JLGModule/age.directive';

@NgModule({
    imports: [],
    declarations: [JLGClickDirective, AgeValidatorDirective],
    providers: [

    ],
    exports: [JLGClickDirective, AgeValidatorDirective],
})
export class JLGModule { }
