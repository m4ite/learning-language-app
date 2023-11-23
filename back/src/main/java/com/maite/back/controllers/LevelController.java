package com.maite.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.services.AuthService;
import com.maite.back.services.LevelService;

import com.maite.back.models.LevelModel;
@RestController
@RequestMapping("/level")
public class LevelController {
    @Autowired
    private LevelService levelService;

    @Autowired
    private AuthService authService;


    @PostMapping("")
    public boolean newLevel(@RequestBody LevelModel newLevel, @RequestHeader("Authorization") String token){
        final var validate = this.authService.validateToken(token.replace("Bearer", ""));
        
        if(validate.isBlank())
            return false;

        levelService.save(newLevel);
        return true;
    }

    @GetMapping("")
    public List<LevelModel> getAll(@RequestHeader("Authorization") String token){
        this.authService.validateToken(token.replace("Bearer",""));
        return levelService.getAll();
    }

       
    
}
