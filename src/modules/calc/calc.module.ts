import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc/calc.component';
import { ScreenComponent } from './components/screen/screen.component';
import { KeyPadComponent } from './components/key-pad/key-pad.component';
import {MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import { KeyComponent } from './components/key/key.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CalcRoutingModule
  ],
  exports: [CalcComponent, ScreenComponent, KeyPadComponent, KeyComponent],
  declarations: [CalcComponent, ScreenComponent, KeyPadComponent, KeyComponent]
})
export class CalcModule { }
