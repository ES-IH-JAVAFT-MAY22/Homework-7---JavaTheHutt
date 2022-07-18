package com.ironhack.homework5.service.impl;

import com.ironhack.homework5.models.Trainer;
import com.ironhack.homework5.repository.TrainerRepository;
import com.ironhack.homework5.service.interfaces.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Override
    public Trainer createTrainer(Trainer trainer) {

        return trainerRepository.save(trainer);
    }
}
