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
  poke!:Pokemon;
  constructor(private pokemonService: PokemonPruebaService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

  mostrarImagen(url: string) {
    if(url==""){
      return 'https://elvortex.com/wp-content/uploads/2018/03/HddtBOT-e1520478229723.png'
    }else {
      let pokeurl =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    return `${pokeurl}${url.split('/')[6]}.png`;
    }


  }
  seleccionarPokemon(pokemon:Pokemon){
    this.poke=pokemon;
  }
}
