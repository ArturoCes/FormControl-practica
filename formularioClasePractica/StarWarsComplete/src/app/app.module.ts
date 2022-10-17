import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { FilmsComponent } from './components/films-list/films-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MaterialImportsModule } from './modules/material-imports.interface';
import { HttpClientModule } from '@angular/common/http';
import { NewPeopleComponent } from './components/new-people-component/new-people-component';
import { EditPeopleComponent } from './components/edit-people-component/edit-people-component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    FilmsComponent,
    SpeciesComponent,
    CharactersListComponent,
    StarshipListComponent,
    PgPrincipalComponent,
    VehiclesListComponent,
    NewPeopleComponent,
    EditPeopleComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
