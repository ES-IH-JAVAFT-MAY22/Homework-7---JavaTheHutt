package com.ironhack.homework5.controller.impl;

import com.ironhack.homework5.controller.interfaces.TrainerController;
import com.ironhack.homework5.models.Trainer;
import com.ironhack.homework5.service.interfaces.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrainerControllerImpl implements TrainerController {

    @Autowired
    private TrainerService trainerService;

    @PostMapping("/trainers")
    @ResponseStatus(HttpStatus.CREATED)
    public Trainer createTrainer(@RequestBody Trainer trainer) {
        return trainerService.createTrainer(trainer);
    }
}
