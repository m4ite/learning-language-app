package com.maite.back.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maite.back.models.UserModel;
import com.maite.back.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel){
        return this.userRepository.save(userModel);
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public UserModel findByEmail(String email) {
        return (UserModel) this.userRepository.findByEmail(email);
    }
}
