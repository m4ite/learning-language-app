package com.maite.back.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("option")
public class OptionModel {
    @Id
    public String id;
    public String nome;
    public String enunciado;
    public String resposta;
    public String opcao1;
    public String opcao2;
    public String opcao3;
    public String nivel;
    public String tipo;
}
