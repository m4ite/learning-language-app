package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.StoryModel;
import com.maite.back.services.AuthService;
import com.maite.back.services.StoryService;

@RestController
@RequestMapping("/story")
public class StoryController {
    @Autowired
    private StoryService storyService;

    @Autowired
    private AuthService authService;

    @PostMapping("")
    public boolean newStory(@RequestBody StoryModel newStory, @RequestHeader("Authorization") String token){
        final var validate =  this.authService.validateToken(token.replace("Bearer ", ""));
        if (validate.isBlank())
            return false;
        
        storyService.save(newStory);
        return true;
    }

    @PostMapping("/get")
    public StoryModel getByTitle(@RequestHeader("Authorization") String token, @RequestBody StoryModel story){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return storyService.getByName(story);
    }
}
