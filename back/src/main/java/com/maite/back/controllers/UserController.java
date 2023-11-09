package com.maite.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maite.back.models.UserModel;
import com.maite.back.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public void newUser(@RequestBody UserModel newUser) {

        userService.save(newUser);
    }

    @GetMapping("")
    public List<UserModel> getAll() {
        List<UserModel> res = userService.findAll();
        return res;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody UserModel user) {
        var u = getAll();
        for (UserModel findUser : u) {
            System.out.println(findUser);

            if (findUser.password.equals(user.password) && findUser.email.equals(user.email))
                return true;
        
        }
        return false;
    }

}