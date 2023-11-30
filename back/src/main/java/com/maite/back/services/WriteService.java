package com.maite.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maite.back.models.WriteModel;
import com.maite.back.repository.WriteRepository;

@Service
public class WriteService {
    
    @Autowired
    private WriteRepository writeRepository;

    public WriteModel saveWrite(WriteModel writeModel)
    {
        return this.writeRepository.save(writeModel);
    }

    public List<WriteModel> getByLevel(String level){
        return this.writeRepository.findByLevel(level);
    }

    public List<WriteModel> getAll( ){
        return this.writeRepository.findAll();
    }
}
