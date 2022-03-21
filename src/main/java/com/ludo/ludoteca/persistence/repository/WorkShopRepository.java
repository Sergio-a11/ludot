package com.ludo.ludoteca.persistence.repository;

import com.ludo.ludoteca.persistence.entity.WorkShop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WorkShopRepository extends JpaRepository<WorkShop, Long> {

    @Modifying
    @Query(value = "UPDATE WORKSHOP SET EXECUTED=true WHERE ID=:id", nativeQuery = true)
    public void maskWorkShopAsExecuted(@Param("id") Long id);
}
