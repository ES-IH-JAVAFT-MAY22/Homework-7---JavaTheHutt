package com.ironhack.homework5.service.interfaces;

import com.ironhack.homework5.models.Pokemon;
import com.ironhack.homework5.models.Team;

import java.util.List;

public interface TeamService {

    //List<Pokemon> createTeam();

    List<Pokemon> addToTeam(Pokemon pokemon);
}
