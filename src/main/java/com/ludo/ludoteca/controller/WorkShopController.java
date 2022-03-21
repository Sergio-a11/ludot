package com.ludo.ludoteca.controller;

import com.ludo.ludoteca.persistence.entity.WorkShop;
import com.ludo.ludoteca.service.WorkShopService;
import com.ludo.ludoteca.service.dto.WorkShopInDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workshop") //Todos deben entrar por /workshop
public class WorkShopController {
    //el controlador solo se debe comunicar con el servicio
    private final WorkShopService workShopService;

    public WorkShopController(WorkShopService workShopService) {
        this.workShopService = workShopService;
    }

    //Create workshop by post method
    @PostMapping
    public WorkShop createWorkShop(@RequestBody WorkShopInDTO workShopInDTO)
    {
        return this.workShopService.createWorkShop(workShopInDTO);
    }

    @GetMapping
    public List<WorkShop> findAll()
    {
        return this.workShopService.findAll();
    }

}
