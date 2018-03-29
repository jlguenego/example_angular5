import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductComponent } from './product.component';
import { AboutComponent } from './about.component';
import { ConnectionGuardService } from '../connection-guard.service';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent, canActivate: [ConnectionGuardService] },
  {
    path: 'about', component: AboutComponent, data: {
      title: 'JLG Consulting',
    }
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
