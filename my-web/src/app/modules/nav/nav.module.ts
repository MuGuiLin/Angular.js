import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule
  ]
})
export class NavModule { }
