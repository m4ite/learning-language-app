package com.maite.back.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("story")

public class StoryModel{
    @Id
    public String id;
    public String title;
    public String content;
    public short xp;
    public String image;

    public StoryModel(String title, String content, short xp, String image)
    {   
        this.title = title;
        this.content = content;
        this.xp = xp;
        this.image = image;
    }

    public StoryModel() 
    {
        
    }
}