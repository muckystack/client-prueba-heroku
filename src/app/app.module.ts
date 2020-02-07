import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterLoginComponent } from './components/auth/register-login/register-login.component';
import { AuthService } from './services/auth/auth.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { PublicationsComponent } from './components/home/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterLoginComponent,
    HomeComponent,
    NavbarComponent,
    PublicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
