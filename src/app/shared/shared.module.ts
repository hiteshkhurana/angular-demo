import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule
  ],
  exports:[
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class SharedModule { }
