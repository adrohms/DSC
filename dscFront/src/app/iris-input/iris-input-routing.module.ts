import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrisInputPage } from './iris-input.page';

const routes: Routes = [
  {
    path: '',
    component: IrisInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrisInputPageRoutingModule {}
