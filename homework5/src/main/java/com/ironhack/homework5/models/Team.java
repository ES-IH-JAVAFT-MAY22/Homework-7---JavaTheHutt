package com.ironhack.homework5.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private List<Pokemon> pokemons;

    public Team() {
    }

    public Team(Trainer trainer, List<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Pokemon> getPokemons() {
        return pokemons;
    }

    public void setPokemons(List<Pokemon> pokemons) {
        if(this.pokemons.size() < 6){
            this.pokemons = pokemons;
        }
    }
}
