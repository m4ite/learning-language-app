package com.maite.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.UserModel;
import com.maite.back.services.UserService;
import com.maite.back.services.AuthService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

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
    public String login(@RequestBody UserModel user) {
        var u = getAll();
        for (UserModel findUser : u) {
            System.out.println(findUser);

            if (findUser.password.equals(user.password) && findUser.email.equals(user.email))
                return (findUser.id);
        }
        return null;
    }

    @GetMapping("/view")
    public UserModel getInfos(@RequestHeader("Authorization") String token) {
        final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
        UserModel res = userService.findByEmail(validate);
        return res;
    }

    @PostMapping("/isAdm")
    public boolean isAdmin(@RequestBody UserModel user) {
        UserModel res = userService.findByEmail(user.email);
        return res.adm;
    }

}