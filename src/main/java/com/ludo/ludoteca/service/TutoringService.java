package com.ludo.ludoteca.service;

import com.ludo.ludoteca.exceptions.APIExceptions;
import com.ludo.ludoteca.persistence.entity.Tutoring;
import com.ludo.ludoteca.persistence.repository.TutoringRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TutoringService {
    private final TutoringRepository tutoringRepository;

    public TutoringService(TutoringRepository tutoringRepository) {
        this.tutoringRepository = tutoringRepository;
    }

    public Tutoring createTutoring(Tutoring tutoring)
    {
        return tutoringRepository.save(tutoring);
    }

    public List<Tutoring> findAll()
    {
        return this.tutoringRepository.findAll(Sort.by(Sort.Direction.ASC, "executionDate"));
    }

    public Optional<Tutoring> findById(Long id)
    {
        return this.tutoringRepository.findById(id);
    }

    public void deleteById(Long id)
    {
        Optional<Tutoring> ot = this.tutoringRepository.findById(id);
        if(ot.isEmpty())
        {
            throw new APIExceptions("Tutoring not found", HttpStatus.NOT_FOUND);
        }
        this.tutoringRepository.deleteById(id);
    }

    public Tutoring updateTutoring(Tutoring tutoring)
    {
        return this.tutoringRepository.save(tutoring);
    }
}
