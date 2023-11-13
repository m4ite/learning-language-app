package com.maite.back.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("user")

public class UserModel{
    @Id
    public String id;
    public String name;
    public String email;
    public short age;
    public String proficience;
    public String password;
    public String salt;
    public short adm;
    public short xp;

    public UserModel(String name, String email, short age, String proficience, String password, String salt)
    {
        this.name = name;
        this.email = email;
        this.age = age;
        this.proficience = proficience;
        this.password = password;
        this.salt = salt;
    }

    public UserModel() 
    {
        
    }
}