import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import {HeaderComponent} from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule
  ],
  exports:[
    HeaderComponent,
    SideNavComponent
  ],
  declarations: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
