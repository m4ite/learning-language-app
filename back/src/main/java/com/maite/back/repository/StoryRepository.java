package com.maite.back.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maite.back.models.StoryModel;

public interface StoryRepository extends MongoRepository<StoryModel, String> {
    @Query("{'title': ?0}")
    StoryModel findByName(String title);
}
