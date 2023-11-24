package com.maite.back.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maite.back.models.WriteModel;

public interface WriteRepository extends MongoRepository<WriteModel, String>
{
    @Query("{'Nivel': ?0}")
    List<WriteModel> findByLevel(String Nivel);
}
