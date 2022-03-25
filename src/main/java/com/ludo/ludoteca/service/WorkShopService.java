package com.ludo.ludoteca.service;

import com.ludo.ludoteca.exceptions.APIExceptions;
import com.ludo.ludoteca.mapper.WorkShopInDTOtoWorkShop;
import com.ludo.ludoteca.persistence.entity.WorkShop;
import com.ludo.ludoteca.persistence.repository.WorkShopRepository;
import com.ludo.ludoteca.service.dto.WorkShopInDTO;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
        return this.repository.findAll(Sort.by(Sort.Direction.DESC, "executionDate"));
    }

    //obtener un taller
    public Optional<WorkShop> findById(Long id)
    {
        Optional<WorkShop> optionalWorkShop = this.repository.findById(id);
        return optionalWorkShop;
    }


    @Transactional
    public void uptadeWorkShopAsExecuted(Long id)
    {
        Optional<WorkShop> optionalWorkShop = this.repository.findById(id);
        if(optionalWorkShop.isEmpty())
        {
            throw new APIExceptions("Task not found", HttpStatus.NOT_FOUND);
        }
        this.repository.maskWorkShopAsExecuted(id);
    }

    public void deleteById(Long id)
    {
        Optional<WorkShop> optionalWorkShop = this.repository.findById(id);
        if(optionalWorkShop.isEmpty())
        {
            throw new APIExceptions("Task not found", HttpStatus.NOT_FOUND);
        }
        this.repository.deleteById(id);
    }

    public WorkShop updateWorkShop(WorkShop workShop)
    {
        return this.repository.save(workShop);
    }
}
