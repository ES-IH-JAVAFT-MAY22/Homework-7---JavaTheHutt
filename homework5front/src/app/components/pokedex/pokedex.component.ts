import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemon: Pokemon;

  pokemons: Pokemon[];

  constructor(

    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private router: Router

  ) {
    this.pokemons = [],
    this.pokemon = new Pokemon('', '', '', 0, 0, 0, 0, 0, 0)
  }

  ngOnInit(): void {


  }

  getAll() {
    this.pokedexService.getAll().subscribe(
      (pokemons) => {
        this.pokemons = pokemons;
      }
    )
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}





