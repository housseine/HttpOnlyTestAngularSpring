import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './shared/state/state';
import { Interceptor } from './core/interceptor/interceptor';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { LoginComponent } from './modules/login/login.component';
import { ProfileComponent } from './modules/login/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    AppComponent
  ],
  imports: [
    LoginRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot(
      [UserState]
    ),
    // NgxsStoragePluginModule.forRoot(
    //   {key: UserState}
    // ),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
