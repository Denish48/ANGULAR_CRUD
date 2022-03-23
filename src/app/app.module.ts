import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestUpdateComponent } from './rest-update/rest-update.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component'
//import for services:
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { TestDirective } from './Diractives/test.directive';
import { RendererDirective } from './Diractives/renderer.directive';
@NgModule({
  declarations: [
    AppComponent,
    RestListComponent,
    LoginComponent,
    RegisterComponent,
    RestUpdateComponent,
    AddRestaurentComponent,
    TestDirective,
    RendererDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
