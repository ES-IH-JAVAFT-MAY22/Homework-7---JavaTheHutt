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

  pokemon1: Pokemon;

  pokemon2: Pokemon;

  pokemon3: Pokemon;

  pokemon4: Pokemon;

  pokemon5: Pokemon;

  pokemon6: Pokemon;

  name: string;


  constructor(

    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private router: Router



  ) {
    this.pokemons = [],
    this.name = '';
    this.pokemon1 = new Pokemon ("","","",0,0,0,0,0,0);
    this.pokemon2 = new Pokemon ("","","",0,0,0,0,0,0);
    this.pokemon3 = new Pokemon ("","","",0,0,0,0,0,0);
    this.pokemon4 = new Pokemon ("","","",0,0,0,0,0,0);
    this.pokemon5 = new Pokemon ("","","",0,0,0,0,0,0);
    this.pokemon6 = new Pokemon ("","","",0,0,0,0,0,0);
  }

  ngOnInit(): void {
    this.pokedexService.getAll().subscribe(
      data => {
        console.log(data);
       
        
          console.log(data.results[0].name); 
          console.log(data.results[1].name); 
          console.log(data.results[2].name); 

          this.pokedexService.getPokemons(data.results[0].name).subscribe(
            data => {

              const name: string = data.species.name;
              const photo: string = data.sprites.front_default;
              const type: string = data.types[0].type.name;
              const hp: number = data.stats[0].base_stat;
              const attack: number = data.stats[1].base_stat;
              const defense: number = data.stats[2].base_stat;
              const specialAttack: number = data.stats[3].base_stat;
              const specialDefense: number = data.stats[4].base_stat;
              const speed: number = data.stats[5].base_stat;

              this.pokemon1.name = name;
              this.pokemon1.photo = photo;
              this.pokemon1.type = type;
              this.pokemon1.hp = hp;
              this.pokemon1.attack = attack;
              this.pokemon1.defense = defense;
              this.pokemon1.specialAttack = specialAttack;
              this.pokemon1.specialDefense = specialDefense;
              this.pokemon1.speed = speed;
      
            }
          )

          this.pokedexService.getPokemons(data.results[1].name).subscribe(
            data => {

              const name: string = data.species.name;
              const photo: string = data.sprites.front_default;
              const type: string = data.types[0].type.name;
              const hp: number = data.stats[0].base_stat;
              const attack: number = data.stats[1].base_stat;
              const defense: number = data.stats[2].base_stat;
              const specialAttack: number = data.stats[3].base_stat;
              const specialDefense: number = data.stats[4].base_stat;
              const speed: number = data.stats[5].base_stat;

              this.pokemon2.name = name;
              this.pokemon2.photo = photo;
              this.pokemon2.type = type;
              this.pokemon2.hp = hp;
              this.pokemon2.attack = attack;
              this.pokemon2.defense = defense;
              this.pokemon2.specialAttack = specialAttack;
              this.pokemon2.specialDefense = specialDefense;
              this.pokemon2.speed = speed;
      
            }
          )

          this.pokedexService.getPokemons(data.results[2].name).subscribe(
            data => {

              const name: string = data.species.name;
              const photo: string = data.sprites.front_default;
              const type: string = data.types[0].type.name;
              const hp: number = data.stats[0].base_stat;
              const attack: number = data.stats[1].base_stat;
              const defense: number = data.stats[2].base_stat;
              const specialAttack: number = data.stats[3].base_stat;
              const specialDefense: number = data.stats[4].base_stat;
              const speed: number = data.stats[5].base_stat;

              this.pokemon3.name = name;
              this.pokemon3.photo = photo;
              this.pokemon3.type = type;
              this.pokemon3.hp = hp;
              this.pokemon3.attack = attack;
              this.pokemon3.defense = defense;
              this.pokemon3.specialAttack = specialAttack;
              this.pokemon3.specialDefense = specialDefense;
              this.pokemon3.speed = speed;
      
            }
          )

          this.pokedexService.getPokemons(data.results[3].name).subscribe(
            data => {

              const name: string = data.species.name;
              const photo: string = data.sprites.front_default;
              const type: string = data.types[0].type.name;
              const hp: number = data.stats[0].base_stat;
              const attack: number = data.stats[1].base_stat;
              const defense: number = data.stats[2].base_stat;
              const specialAttack: number = data.stats[3].base_stat;
              const specialDefense: number = data.stats[4].base_stat;
              const speed: number = data.stats[5].base_stat;

              this.pokemon4.name = name;
              this.pokemon4.photo = photo;
              this.pokemon4.type = type;
              this.pokemon4.hp = hp;
              this.pokemon4.attack = attack;
              this.pokemon4.defense = defense;
              this.pokemon4.specialAttack = specialAttack;
              this.pokemon4.specialDefense = specialDefense;
              this.pokemon4.speed = speed;
      
            }
          )

          this.pokedexService.getPokemons(data.results[4].name).subscribe(
            data => {

              const name: string = data.species.name;
              const photo: string = data.sprites.front_default;
              const type: string = data.types[0].type.name;
              const hp: number = data.stats[0].base_stat;
              const attack: number = data.stats[1].base_stat;
              const defense: number = data.stats[2].base_stat;
              const specialAttack: number = data.stats[3].base_stat;
              const specialDefense: number = data.stats[4].base_stat;
              const speed: number = data.stats[5].base_stat;

              this.pokemon5.name = name;
              this.pokemon5.photo = photo;
              this.pokemon5.type = type;
              this.pokemon5.hp = hp;
              this.pokemon5.attack = attack;
              this.pokemon5.defense = defense;
              this.pokemon5.specialAttack = specialAttack;
              this.pokemon5.specialDefense = specialDefense;
              this.pokemon5.speed = speed;
      
            }
          )
        
       }
       
  
    )
  }

  getAll(): void {}


  goBack(): void {
    this.router.navigate(['/']);
  }
}





