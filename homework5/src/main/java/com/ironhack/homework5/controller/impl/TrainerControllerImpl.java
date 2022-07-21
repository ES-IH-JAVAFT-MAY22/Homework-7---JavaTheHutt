package com.ironhack.homework5.controller.impl;

import com.ironhack.homework5.controller.interfaces.TrainerController;
import com.ironhack.homework5.models.Trainer;
import com.ironhack.homework5.service.interfaces.TrainerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin ("*")
public class TrainerControllerImpl implements TrainerController {

    @Autowired
    private TrainerService trainerService;

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @PostMapping("/trainers")
    @ResponseStatus(HttpStatus.CREATED)
    public Trainer createTrainer(@RequestBody Trainer trainer) {
        logger.info(trainer.toString());
        return trainerService.createTrainer(trainer);
    }
}
