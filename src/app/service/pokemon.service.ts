import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlB = "https://pokeapi.co/api/v2";
  constructor(private http:HttpClient) { 
    console.log('Pokedex')
  }

  getPokemon(index: string){
    return this.http.get<any>(`${this.urlB}/pokemon/${index}`);
  }
}
