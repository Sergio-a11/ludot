package com.ludo.ludoteca.mapper;

import com.ludo.ludoteca.persistence.entity.WorkShop;
import com.ludo.ludoteca.service.dto.WorkShopInDTO;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class WorkShopInDTOtoWorkShop implements IMapper<WorkShopInDTO, WorkShop>{
    //Metodo que convierte la entrada del usuario a la entidad completa
    @Override
    public WorkShop map(WorkShopInDTO in) {
        WorkShop ws = new WorkShop();
        ws.setTitle(in.getTitle());
        ws.setDescription(in.getDescription());
        ws.setLocation(in.getLocation());
        ws.setMaterial(in.getMaterial());
        ws.setExecutionDate(in.getExecutionDate());
        LocalDateTime date = LocalDateTime.now();
        LocalDateTime date2 = date.withNano(0);
        LocalDateTime date3 = date2.withSecond(0);
        ws.setCreatedDate(date3);
        ws.setExecuted(false);
        return ws;
    }
}
