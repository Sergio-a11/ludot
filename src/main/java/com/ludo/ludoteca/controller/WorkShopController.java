package com.ludo.ludoteca.controller;

import com.ludo.ludoteca.persistence.entity.WorkShop;
import com.ludo.ludoteca.service.WorkShopService;
import com.ludo.ludoteca.service.dto.WorkShopInDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

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

    @PatchMapping("/mark_as_executed/{id}")
    public ResponseEntity<Void> markAsExecuted(@PathVariable("id") Long id)
    {
        this.workShopService.uptadeWorkShopAsExecuted(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<WorkShop>> findById(@PathVariable("id") Long id)
    {
        return ResponseEntity.ok(this.workShopService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id)
    {
        this.workShopService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
