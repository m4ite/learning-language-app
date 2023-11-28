package com.maite.back.models;

import org.apache.catalina.valves.rewrite.ResolverImpl;
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

    public WriteModel(String nome) {
        this.nome = nome;
    }

    public WriteModel(String nome, String enunciado, 
    String resposta, String palavra1,
    String palavra2,String palavra3,
    String palavra4, String palavra5, 
    String palavra6, String palavra7,
    String palavra8, String nivel, String tipo ){
        this.nome = nome;
        this.enunciado = enunciado;
        this.resposta = resposta;
        this.palavra1 = palavra1;
        this.palavra2 = palavra2;
        this.palavra3 = palavra3;
        this.palavra4 = palavra4;
        this.palavra5 = palavra5;
        this.palavra6 = palavra6;
        this.palavra7 = palavra7;
        this.palavra8 = palavra8;
        this.nivel = nivel;
        this.tipo = tipo;
    }

    public WriteModel(){
        
    }
}
