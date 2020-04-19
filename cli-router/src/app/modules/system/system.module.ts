import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemComponent } from './system.component';

@NgModule({
  declarations: [SystemComponent],
  exports: [
    SystemComponent
  ],

  imports: [
    CommonModule
  ]
})
export class SystemModule { }
