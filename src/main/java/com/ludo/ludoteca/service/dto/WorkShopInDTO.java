package com.ludo.ludoteca.service.dto;


import com.ludo.ludoteca.persistence.entity.LudoLocation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WorkShopInDTO {
    //datos que se le piden al usuario para hacer un taller
    private String title;
    private String description;
    private String material;
    private LudoLocation location;
    private LocalDateTime executionDate;
}
