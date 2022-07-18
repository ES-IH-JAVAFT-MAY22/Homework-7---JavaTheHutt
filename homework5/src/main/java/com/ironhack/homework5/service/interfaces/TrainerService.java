package com.ironhack.homework5.service.interfaces;

import com.ironhack.homework5.models.Trainer;
import com.ironhack.homework5.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;

public interface TrainerService {

    Trainer createTrainer(Trainer trainer);
}
