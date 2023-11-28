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

    public OptionModel(String nome) {
        this.nome = nome;
    }

    public OptionModel(String nome, String enunciado,
            String resposta, String opcao1,
            String opcao2, String opcao3,
            String nivel, String tipo) {
        this.nome = nome;
        this.enunciado = enunciado;
        this.resposta = resposta;
        this.opcao1 = opcao1;
        this.opcao2 = opcao2;
        this.opcao3 = opcao3;
        this.nivel = nivel;
        this.tipo = tipo;
    }

    public OptionModel(){
        
    }
}
