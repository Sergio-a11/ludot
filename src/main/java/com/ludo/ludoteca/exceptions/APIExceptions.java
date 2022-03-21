package com.ludo.ludoteca.exceptions;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class APIExceptions extends RuntimeException{
    private String message;
    private HttpStatus httpStatus;

    public APIExceptions(String message, HttpStatus httpStatus) {
        super(message);
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
