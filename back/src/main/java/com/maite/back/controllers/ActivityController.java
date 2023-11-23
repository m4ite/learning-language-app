package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.ListeningModel;
import com.maite.back.services.ActivityService;
import com.maite.back.services.AuthService;

import java.util.List;

@RestController
@RequestMapping("/listening")
public class ActivityController {
    
    @Autowired
    private ActivityService activityService;

    @Autowired
    private AuthService authService;


    @PostMapping("")
    public boolean newLisnening(@RequestBody ListeningModel newListening, @RequestHeader("Authorization") String token)
    {
        final var validate = this.authService.validateToken(token.replace("Bearer", ""));
        if(validate.isBlank())
            return false;
        activityService.saveListening(newListening);
        return true;
    }

    @GetMapping("")
    public List<ListeningModel> getByLevel(@RequestHeader("Authorization") String token, @RequestBody String level){
        this.authService.validateToken(token.replace("Bearer", ""));
        return activityService.getAll(level);
    }
}
