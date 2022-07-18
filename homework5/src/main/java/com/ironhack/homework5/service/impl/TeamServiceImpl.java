package com.ironhack.homework5.service.impl;

import com.ironhack.homework5.models.Pokemon;
import com.ironhack.homework5.models.Team;
import com.ironhack.homework5.repository.TeamRepository;
import com.ironhack.homework5.service.interfaces.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    private List<Pokemon> pokemonList = new ArrayList<>();

    @Autowired
    private TeamRepository teamRepository;


/*    @Override
    public List<Pokemon> createTeam() {
        return pokemonList;
    }*/

    @Override
    public List<Pokemon> addToTeam(Pokemon pokemon) {
        pokemonList.add(pokemon);
        return pokemonList;
    }
}
