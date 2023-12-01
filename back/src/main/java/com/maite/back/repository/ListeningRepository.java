package com.maite.back.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maite.back.models.ListeningModel;
import java.util.List;

public interface ListeningRepository extends MongoRepository<ListeningModel, String>{
    @Query("{'nivel': ?0}")
    List<ListeningModel> findByLevel(String nivel);

    @Query("{'nome': ?0}")
    ListeningModel findByName(String nome);
}