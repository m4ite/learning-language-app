package com.maite.back.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maite.back.models.OptionModel;;

public interface OptionRepository extends MongoRepository<OptionModel, String> {
    @Query("{'nivel': ?0}")
    List<OptionModel> findByLevel(String nivel);

    @Query("{'nome': ?0}")
    OptionModel findByName(String nome);
}
