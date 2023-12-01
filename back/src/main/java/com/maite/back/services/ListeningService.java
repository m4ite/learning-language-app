package com.maite.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maite.back.models.ListeningModel;
import com.maite.back.repository.ListeningRepository;

@Service
public class ListeningService {
    
    @Autowired
    private ListeningRepository listeningRepository;

    public ListeningModel saveListening(ListeningModel listeningModel){
        return this.listeningRepository.save(listeningModel);
    }

    public List<ListeningModel> getByLevel(String level){
        return this.listeningRepository.findByLevel(level);
    }

    public ListeningModel getByName(String name){
        return this.listeningRepository.findByName(name);
    }

    public List<ListeningModel> getAll()
    {
        return this.listeningRepository.findAll();
    }
}
