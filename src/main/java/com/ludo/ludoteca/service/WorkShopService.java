package com.ludo.ludoteca.service;

import com.ludo.ludoteca.mapper.WorkShopInDTOtoWorkShop;
import com.ludo.ludoteca.persistence.entity.WorkShop;
import com.ludo.ludoteca.persistence.repository.WorkShopRepository;
import com.ludo.ludoteca.service.dto.WorkShopInDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkShopService {

    private final WorkShopRepository repository;
    private final WorkShopInDTOtoWorkShop mapper;

    //Controlador de la BD de talleres
    public WorkShopService(WorkShopRepository repository, WorkShopInDTOtoWorkShop mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    //Crear un taller
    public WorkShop createWorkShop(WorkShopInDTO workShopInDTO)
    {
        //se pasa por el mapper para convertir la entrada en la entidad completa
        WorkShop ws = mapper.map(workShopInDTO);
        return this.repository.save(ws);
    }

    //obtener los talleres
    public List<WorkShop> findAll() {
        return this.repository.findAll();
    }
}
