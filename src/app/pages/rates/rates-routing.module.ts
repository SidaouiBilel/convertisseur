import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesContainerComponent } from './container/rates-container.component';

const routes: Routes = [
  { path: '', component: RatesContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesRoutingModule { }
