import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrisInputPageRoutingModule } from './iris-input-routing.module';

import { IrisInputPage } from './iris-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrisInputPageRoutingModule
  ],
  declarations: [IrisInputPage]
})
export class IrisInputPageModule {}
