import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {  JsonpModule } from "@angular/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";// hoc HTTP
import { InMemoryDataService } from "./in-memory-data.service";// hoc HTTP
import{NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormUserComponent } from './form-user/form-user.component';
import { NgbdDatepickerPopup } from './datepicker-popup/datepicker-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FormUserComponent,
    NgbdDatepickerPopup,
  ],

  //--module=app tells the CLI to register it in the imports array of the AppModule.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule, JsonpModule, NgbModule.forRoot()

  ],
  providers: [
    HeroService,
    MessageService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
