package com.maite.back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maite.back.models.StoryModel;
import com.maite.back.repository.StoryRepository;

import java.util.List;


@Service
public class StoryService {
    
    @Autowired
    private StoryRepository storyRepository;

    public StoryModel save(StoryModel storyModel)
    {
        return this.storyRepository.save(storyModel);
    }

    public List<StoryModel> getAll()
    {
        return this.storyRepository.findAll();
    }

    public StoryModel getByName(StoryModel storyModel)
    {
        return this.storyRepository.findByName(storyModel.title);
    }
}
