import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { FilmsComponent } from './components/films-list/films-list.component';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

const routes: Routes = [
  {path: 'planets-list', component: PlanetsListComponent,pathMatch:'full'},
  {path: 'film-list', component: FilmsComponent,pathMatch:'full'},
  {path: 'characters-list', component: CharactersListComponent,pathMatch:'full'},
  {path: 'pgPrincipal', component: PgPrincipalComponent,pathMatch:'full'},
  {path: 'starship-list',component:StarshipListComponent,pathMatch:'full'},
  {path: 'species-list',component:SpeciesComponent,pathMatch:'full'},
  {path: 'vehicles-list',component:VehiclesListComponent,pathMatch:'full'},
  {path: '',redirectTo:'pgPrincipal',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

