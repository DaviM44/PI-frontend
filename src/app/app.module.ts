import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarsalaComponent } from './cadastrarsala/cadastrarsala.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TelainicialComponent,
    CadastrarprofComponent,
    CadastrarsalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }