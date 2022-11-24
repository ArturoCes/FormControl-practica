package com.salesianostriana.dam.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class GetCursoConAlumnosDto extends GetCursoDto {

    @Builder.Default
    List<GetAlumnoSinCursoDto> alumnos = new ArrayList<>();

}
