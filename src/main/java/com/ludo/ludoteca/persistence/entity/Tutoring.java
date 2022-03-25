package com.ludo.ludoteca.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tutoring")
public class Tutoring {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String NID;
    private String full_name;
    private Courses course;
    private Subjects subject;
    private LocalDateTime executionDate;
    private String additional_data;

}
