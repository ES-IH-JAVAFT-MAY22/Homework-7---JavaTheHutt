package com.ironhack.homework5.controller.impl;

import com.ironhack.homework5.controller.interfaces.TeamController;
import com.ironhack.homework5.models.Pokemon;
import com.ironhack.homework5.repository.TeamRepository;
import com.ironhack.homework5.service.interfaces.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeamControllerImpl implements TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/pokemons")
    @ResponseStatus(HttpStatus.CREATED)
    public List<Pokemon> addToTeam(@RequestBody Pokemon pokemon) {
        return teamService.addToTeam(pokemon);
    }
}
