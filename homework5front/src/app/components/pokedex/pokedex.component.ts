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

  pokemons: Pokemon[];

  name: string;


  constructor(

    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private router: Router



  ) {
    this.pokemons = [],
    this.name = '';
  }

  ngOnInit(): void {
    this.pokedexService.getAll().subscribe(
      data => {
        console.log(data);
       // this.pokemons= data.results;
        for(let i = 0; i<data.results.length; i++){
          console.log(data.results[i].name); 
        }
      // for(let i = 0; i<20; i++){
      //  console.log(data.name);
      //  const name: string = data.name;
      //  this.pokemons[0].name = name;
        
       }
       
    //  }
    )
  }

  getAll(): void {}


  goBack(): void {
    this.router.navigate(['/']);
  }
}





