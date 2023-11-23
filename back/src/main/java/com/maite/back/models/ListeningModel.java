package com.maite.back.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("activity")
public class ListeningModel {
    @Id
    public String id;
    public String audio;
    public String resposta;
    public String alternativa1;
    public String alternativa2;
    public String alternativa3;
    public String nivel;
}
