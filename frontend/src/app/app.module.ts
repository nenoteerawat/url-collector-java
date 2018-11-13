import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {ComponentsModule} from "./components/components.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "./service/guard/auth.guard";
import {fakeBackendProvider} from "./intercepter/fake-backend";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/authen/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
