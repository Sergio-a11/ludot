package com.ludo.ludoteca.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

//Lombok gey y set
@Data
@Entity
@Table(name="workshop")
public class WorkShop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String material;
    private LudoLocation location;
    private LocalDateTime createdDate;
    private LocalDateTime executionDate;
    private boolean executed;
}
