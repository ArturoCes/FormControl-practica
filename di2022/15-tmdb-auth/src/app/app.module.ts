import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsImportModule } from './material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsComponent } from './dialogs/dialogs/dialogs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PeopleListComponent,
    DialogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsImportModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
