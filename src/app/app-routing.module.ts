import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';

const appRoutes: Routes = [{ path: 'add-resto', component: AddRestoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
