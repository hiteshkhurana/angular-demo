import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './shared/login/login.component';
import { CardComponent } from './shared/card/card.component';
import { ProductsComponent } from './products/products.component';
import { NavItemComponent } from './shared/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    CardComponent,
    ProductsComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
