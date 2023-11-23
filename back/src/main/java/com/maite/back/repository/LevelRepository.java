package com.maite.back.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.maite.back.models.LevelModel;

public interface LevelRepository extends MongoRepository<LevelModel, String>{
    
}