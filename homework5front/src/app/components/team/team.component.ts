import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  pokemon: Pokemon;

  pokemons: Pokemon[];

  pokemonName:string


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private router: Router,
    private backendService: BackendService
  ) {
    this.pokemons= [];
    this.pokemon = new Pokemon ('','','', 0, 0, 0, 0, 0, 0);
    this.pokemonName = '';
  }

  ngOnInit(): void {

  }

  getPokemons(){

    this.pokedexService.getPokemons(this.pokemonName).subscribe(
      data => {
        console.log(data);
        const name: string = data.species.name;
        const photo: string = data.sprites.front_default;
        this.pokemon.name = name;
        this.pokemon.photo = photo;

      }
    );

    this.backendService.addTeam(this.pokemon).subscribe(
      dataResult => {
      }, 
      error => {
        console.log(error.status);
        console.error("There was an error!", error);
      }
    );

  }

  viewStats(): void{
    this.pokedexService.viewStats(this.pokemonName).subscribe(
      data => {
        console.log(data);
        const name: string = data.species.name;
        const type: string = data.types[0].type.name;
        const hp: number = data.stats[0].base_stat;
        const attack: number = data.stats[1].base_stat;
        const defense: number = data.stats[2].base_stat;
        const specialAttack: number = data.stats[3].base_stat;
        const specialDefense: number = data.stats[4].base_stat;
        const speed: number = data.stats[5].base_stat;
        this.pokemon.type = type;
        this.pokemon.hp = hp;
        this.pokemon.attack = attack;
        this.pokemon.defense = defense;
        this.pokemon.specialAttack = specialAttack;
        this.pokemon.specialDefense = specialDefense;
        this.pokemon.speed = speed;
      }
      );
    }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
