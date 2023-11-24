package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.services.AuthService;

@RestController
@RequestMapping("/option")
public class OptionController {
    @Autowired
    private OptionService optionService;

    @Autowired
    private AuthService authService;

    @PostMapping("")
    public boolean newOption(@RequestBody OptionModel newOption,
    @RequestHeader("Authorization") String token){
        final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
        if(validate.isBlank())
            return false;
        optionService.saveWrite(newOption);
        return true;
    }
}
