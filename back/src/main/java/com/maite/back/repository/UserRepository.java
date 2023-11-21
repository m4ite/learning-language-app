package com.maite.back.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.maite.back.models.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    @Query("{'email': ?0}")
    UserModel findByEmail(String email);
}
