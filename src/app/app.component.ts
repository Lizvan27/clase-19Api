import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clase-19';

  data:any[] = [];

  pokemons = [];

  constructor(private pokemon:PokemonService){}

  ngOnInit(): void {
    this.getPokemons()
  }
  getPokemons(){
    let pokemonData;

    for(let i =1; i<150; i++){
      this.pokemon.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {

        }
      )
    }
  }
}
