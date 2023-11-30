package com.maite.back.models;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Document("user")
public class UserModel implements UserDetails{
    @Id
    public String id;
    public String name;
    public String email;
    public short age;
    public String proficience;
    public String password;
    public String salt;
    public boolean adm;
    public short xp;

    public UserModel(String name, String email, short age, String proficience, String password, String salt, Boolean adm)
    {
        this.name = name;
        this.email = email;
        this.age = age;
        this.proficience = proficience;
        this.password = password;
        this.salt = salt;
        this.adm = adm;
    }

    public UserModel(String email, String password) 
    {
        this.email = email;
        this.password = password;
    }
    
    public UserModel(String email) 
    {
        this.email = email;
    }

    public UserModel(){
        
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}