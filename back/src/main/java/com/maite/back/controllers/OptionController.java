package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.services.AuthService;
import com.maite.back.services.OptionService;
import com.maite.back.models.OptionModel;

import java.util.List;

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
        optionService.saveOption(newOption);
        return true;
    }

    @PostMapping("/level")
    public List<OptionModel> getByLevel(@RequestHeader ("Authorization") String token, @RequestBody OptionModel level){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return optionService.getByLevel(level.nome);
    }
}
