import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialImportsModule } from './module-imports/materialimports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StorageComponent } from './storage/storage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StorageComponent,

  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
