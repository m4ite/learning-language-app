package com.maite.back.exception;

public class AuthException extends RuntimeException{
    public AuthException(final String message)
    {
        super(message);
    }
}
