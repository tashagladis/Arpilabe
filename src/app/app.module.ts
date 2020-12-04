import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";


import { PersonneDetailComponent } from './personnes/personne-detail/personne-detail.component';
import { PersonneDetailListComponent } from './personnes/personne-detail-list/personne-detail-list.component';
import { PersonneService } from './Share/personne.service';
import { PersonnesComponent } from './personnes/personnes.component';
import {  HttpClientModule }  from '@angular/common/http'
import {enableProdMode} from '@angular/core';

enableProdMode();



@NgModule({
  declarations: [
    AppComponent,
    
    PersonnesComponent,
    PersonneDetailComponent,
    PersonneDetailListComponent,
    PersonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
