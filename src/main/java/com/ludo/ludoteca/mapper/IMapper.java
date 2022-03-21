package com.ludo.ludoteca.mapper;

public interface IMapper <I,O> {
    //interfaz generica para forzar la forma del mapeo, de I -> O
    public O map(I in);
}
