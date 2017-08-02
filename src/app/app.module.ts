import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import routes from './app.routes';
import { AccountDetailService } from './service/account-detail/account-detail.service';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { AuthenticationService } from './service/authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterializeModule.forRoot(),
    SharedModule
  ],
  providers: [AccountDetailService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
