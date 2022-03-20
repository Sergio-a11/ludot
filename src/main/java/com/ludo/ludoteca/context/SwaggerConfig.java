package com.ludo.ludoteca.context;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

//indica que la clase puede crear beans
@Configuration
// Traer swagger 2 al proy
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api()
    {
        //Va a documentar lo que este en el paquete controller
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.ludo.ludoteca.controller"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo()
    {
        return new ApiInfo("Ludoteca Proy",
                "Sistema de gestión de talleres",
                "v1",
                "Terms of service",
                new Contact("Sergio Cruz",
                        "www.ejm.com",
                        "cz.andrs@gmail.com"),
                "License of API",
                "API License URL",
                Collections.emptyList());
    }
}
