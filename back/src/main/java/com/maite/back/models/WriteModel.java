package com.maite.back.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("write")
public class WriteModel {
    @Id
    public String id;
    public String Enunciado;
    public String resposta;
    public String Palavra1;
    public String Palavra2;
    public String Palavra3;
    public String Palavra4;
    public String Palavra5;
    public String Palavra6;
    public String Palavra7;
    public String Palavra8;
    public String Nivel;
}
