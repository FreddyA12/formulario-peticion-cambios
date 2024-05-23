import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './formulario.entity';

@Injectable()
export class FormularioService {


  constructor(
    @InjectRepository(Formulario)
    private formularioRepository: Repository<Formulario>,
  ) { }

  async getById(id: number) {
    console.log('hola');
    return await this.formularioRepository.findOne({ where: { numero_de_solicitud: id } })
  }

  async save(formularioData: any) {
    return await this.formularioRepository.save(formularioData)
  }

  async getAll(): Promise<Formulario[]> {
    return await this.formularioRepository.find();
  }

  async update(id: number, formularioData: any): Promise<Formulario> {
    console.log('1');
    const formulario = await this.getById(id);
    if (!formulario) {
      throw new Error('Formulario not found');
    }
    Object.assign(formulario, formularioData);
    return this.formularioRepository.save(formulario);
  }

  async getAllOrdered(orderBy: string): Promise<Formulario[]> {
    if (orderBy === 'prioridad') {
      return this.formularioRepository
        .createQueryBuilder('formulario')
        .orderBy('CASE ' +
          'WHEN formulario.prioridad = \'alta\' THEN 1 ' +
          'WHEN formulario.prioridad = \'media\' THEN 2 ' +
          'WHEN formulario.prioridad = \'baja\' THEN 3 ' +
          'ELSE 4 END', 'ASC')
        .getMany();
    } else if (orderBy === 'fecha') {
      return this.formularioRepository
        .createQueryBuilder('formulario')
        .orderBy('formulario.fecha_solicitud', 'DESC') // Orden descendente para las fechas más recientes
        .getMany();
    } else {  // Manejo de otros tipos de ordenamiento, si es necesario
      const orderCriteria = { [orderBy]: 'ASC' }; // Ajusta según necesidad
      return await this.formularioRepository.find({ order: orderCriteria });
    }
  }

}
