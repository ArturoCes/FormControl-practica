import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsImportModule } from './material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsComponent } from './components/dialogs/dialogs.component';



@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    DialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsImportModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
