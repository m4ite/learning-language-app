package com.maite.back.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("listening")
public class ListeningModel {
    @Id
    public String id;
    public String nome;
    public String audio;
    public String resposta;
    public String alternativa1;
    public String alternativa2;
    public String alternativa3;
    public String nivel;
    public String tipo;

    public ListeningModel(String nome) {
        this.nome = nome;
    }

    public ListeningModel(String nome, String audio,
            String resposta, String alternativa1,
            String alternativa2, String alternativa3,
            String nivel, String tipo) {
        this.nome = nome;
        this.audio = audio;
        this.resposta = resposta;
        this.alternativa1 = alternativa1;
        this.alternativa2 = alternativa2;
        this.alternativa3 = alternativa3;
        this.nivel = nivel;
        this.tipo = tipo;
    }

    public ListeningModel() {

    }
}
