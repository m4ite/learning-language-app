package com.maite.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.ListeningModel;
import com.maite.back.services.ListeningService;
import com.maite.back.services.AuthService;

import java.util.List;

@RestController
@RequestMapping("/listening")
public class ListeningController {

    @Autowired
    private ListeningService listeningService;

    @Autowired
    private AuthService authService;

    @PostMapping("")
    public boolean newLisnening(@RequestBody ListeningModel newListening,
            @RequestHeader("Authorization") String token) {
        final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
        if (validate.isBlank())
            return false;
        listeningService.saveListening(newListening);
        return true;
    }

    @PostMapping("/level")
    public List<ListeningModel> getByLevel(@RequestHeader("Authorization") String token, @RequestBody ListeningModel level) {
        this.authService.validateToken(token.replace("Bearer ", ""));
        return listeningService.getByLevel(level.nome);
    }

    @GetMapping("")
    public List<ListeningModel> getAll(@RequestHeader("Authorization") String token){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return this.listeningService.getAll();
    }

    @PostMapping("/getByName")
    public ListeningModel getByName(@RequestHeader("Authorization") String token, @RequestBody ListeningModel level){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return this.listeningService.getByName(level.nome);
    }
    
}
