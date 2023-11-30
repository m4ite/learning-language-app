package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.StoryModel;
import com.maite.back.services.AuthService;
import com.maite.back.services.StoryService;

import java.util.List;


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

    @GetMapping("")
    public List<StoryModel> getAll(){
        return this.storyService.getAll();
    }

    @PostMapping("/search")
    public StoryModel getByTitle(@RequestBody StoryModel story){
        return storyService.getByName(story);
    }
}
