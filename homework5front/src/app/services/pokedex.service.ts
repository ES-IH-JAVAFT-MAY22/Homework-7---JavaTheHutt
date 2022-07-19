import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon'

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(pokemonName:string): Observable<any> {

    //return this.http.get(`https://pokeapi.co/api/v2/pokemon/name=${name}`);
    //  return this.http.get(`https://pokeapi.co/api/v2/pokemon?name=${name}`);
    return this.http.get(`${this.API_URL}/${pokemonName}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
  }
}
