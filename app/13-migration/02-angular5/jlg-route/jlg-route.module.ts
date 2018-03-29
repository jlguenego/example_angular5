import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { JLGMiscModule } from '../jlg-misc/jlg-misc.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule, JLGMiscModule, CommonModule],
    exports: [RouterModule],
    declarations: [HomeComponent, AboutComponent],
})
export class JLGRouteModule { }
