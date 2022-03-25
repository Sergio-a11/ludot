package com.ludo.ludoteca.controller;

import com.ludo.ludoteca.persistence.entity.Tutoring;
import com.ludo.ludoteca.service.TutoringService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tutoring")
public class TutoringController {
    private final TutoringService tutoringService;

    public TutoringController(TutoringService tutoringService) {
        this.tutoringService = tutoringService;
    }

    @PostMapping
    public Tutoring createTutoring(@RequestBody Tutoring tutoring)
    {
        return this.tutoringService.createTutoring(tutoring);
    }

    @GetMapping
    public List<Tutoring> findAll()
    {
        return this.tutoringService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Tutoring>> findById(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.tutoringService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id)
    {
        this.tutoringService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public Tutoring updateTutoring(@RequestBody Tutoring tutoring)
    {
        return this.tutoringService.updateTutoring(tutoring);
    }

}
