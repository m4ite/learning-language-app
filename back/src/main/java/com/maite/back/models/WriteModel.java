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
    public String nome;
    public String enunciado;
    public String resposta;
    public String palavra1;
    public String palavra2;
    public String palavra3;
    public String palavra4;
    public String palavra5;
    public String palavra6;
    public String palavra7;
    public String palavra8;
    public String nivel;
    public String tipo;
}
