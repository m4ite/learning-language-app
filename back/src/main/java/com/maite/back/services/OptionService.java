package com.maite.back.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maite.back.models.OptionModel;
import com.maite.back.repository.OptionRepository;

@Service
public class OptionService {
    
    @Autowired
    private OptionRepository optionRepository;

    public OptionModel saveOption(OptionModel optionModel){
        return this.optionRepository.save(optionModel);
    }

    public List<OptionModel> getByLevel(String level){
        return this.optionRepository.findByLevel(level);
    }

}