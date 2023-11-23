package com.maite.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maite.back.repository.LevelRepository;
import com.maite.back.models.LevelModel;

@Service
public class LevelService {
    
    @Autowired
    private LevelRepository levelRepository;

    public LevelModel save(LevelModel levelModel)
    {
        return this.levelRepository.save(levelModel);
    }

    public List<LevelModel> getAll()
    {
        return this.levelRepository.findAll();
    }
}
