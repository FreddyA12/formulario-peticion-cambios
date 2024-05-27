import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './formulario.entity';
import { FormularioDTO } from './formulario.dto';

@Injectable()
export class FormularioService {
  constructor(
    @InjectRepository(Formulario)
    private formularioRepository: Repository<Formulario>,
  ) { }

  async getById(id: number) {
    return await this.formularioRepository.findOne({ where: { id: id } });
  }

  async save(formularioData: any) {
    if (
      !formularioData.nombre_proyecto ||
      !formularioData.prioridad ||
      !formularioData.nombre_cambio ||
      !formularioData.nombre_solicitante ||
      !formularioData.repositorio ||
      !formularioData.categoria_cambio ||
      !formularioData.causa_cambio ||
      !formularioData.descripcion_cambio ||
      !formularioData.razon_cambio ||
      !formularioData.impacto_cambio ||
      !formularioData.justificacion_cambio ||
      !formularioData.duracion ||
      !formularioData.evaluaciones ||
      !formularioData.implicacion_recursos ||
      !formularioData.estado ||
      !formularioData.fecha_solicitud
    ) {
      throw new BadRequestException('Campos vacios');
    }
    return await this.formularioRepository.save(formularioData);
  }

  async update(id: number, formularioData: any): Promise<Formulario> {
    const formulario = await this.getById(id);
    if (!formulario) {
      throw new BadRequestException('Formulario not found');
    }
    if (
      !formularioData.nombre_proyecto ||
      !formularioData.prioridad ||
      !formularioData.nombre_cambio ||
      !formularioData.nombre_solicitante ||
      !formularioData.repositorio ||
      !formularioData.categoria_cambio ||
      !formularioData.causa_cambio ||
      !formularioData.descripcion_cambio ||
      !formularioData.razon_cambio ||
      !formularioData.impacto_cambio ||
      !formularioData.justificacion_cambio ||
      !formularioData.duracion ||
      !formularioData.evaluaciones ||
      !formularioData.implicacion_recursos ||
      !formularioData.estado ||
      !formularioData.fecha_solicitud
    ) {
      throw new BadRequestException('Campos vacios');
    }

    Object.assign(formulario, formularioData);
    return this.formularioRepository.save(formulario);
  }

  async delete(id: number) {
    return await this.formularioRepository.delete(id);
  }

  async getAll(): Promise<FormularioDTO[]> {
    const forms = await this.formularioRepository.find();
    if (!forms) {
      throw new Error('No hay formularios');
    }
    return forms.map((form) => this.toDTO(form));
  }

  toDTO(formulario: Formulario): FormularioDTO {
    const dto = new FormularioDTO();
    dto.id = formulario.id;
    dto.nombre_cambio = formulario.nombre_cambio;
    dto.nombre_solicitante = formulario.nombre_solicitante;
    dto.fecha_solicitud = formulario.fecha_solicitud;
    dto.prioridad = formulario.prioridad;
    dto.estado = formulario.estado;
    return dto;
  }
}
