package com.maite.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maite.back.models.WriteModel;
import com.maite.back.services.AuthService;
import com.maite.back.services.WriteService;

@RestController
@RequestMapping("writing")
public class WriteController {
    @Autowired
    private WriteService writeService;

    @Autowired
    private AuthService authService;

    @PostMapping("")
    public boolean newWriting(@RequestBody WriteModel newWrite, @RequestHeader("Authorization") String token) {
        final var validate = this.authService.validateToken(token.replace("Bearer ", ""));
        if (validate.isBlank())
            return false;
        writeService.saveWrite(newWrite);
        return true;
    }

    @PostMapping("/level")
    public List<WriteModel> getByLevel(@RequestHeader("Authorization") String token, @RequestBody WriteModel level){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return writeService.getByLevel(level.nome);
    }

    @GetMapping("")
    public List<WriteModel> getAll(@RequestHeader("Authorization") String token){
        this.authService.validateToken(token.replace("Bearer ", ""));
        return writeService.getAll();
    }
}
