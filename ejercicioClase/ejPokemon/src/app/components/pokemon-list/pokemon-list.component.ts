import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonPruebaService } from 'src/app/services/pokemon-prueba.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];
  constructor(private pokemonService: PokemonPruebaService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

  mostrarImagen(url: string) {
    let pokeurl =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    return `${pokeurl}${url.split('/')[6]}.png`;
    
  }
}
