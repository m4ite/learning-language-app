package com.maite.back.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import org.springframework.data.mongodb.repository.Query;
import com.maite.back.models.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    @Query("{'email': ?0}")
    List<UserModel> findByEmail(String name);
}
