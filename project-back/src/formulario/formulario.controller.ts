import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { Formulario } from './formulario.entity';

@Controller('formulario')
export class FormularioController {
    constructor(private formularioService: FormularioService) { }

    @Get()
    async getAll(): Promise<Formulario[]> {
        return await this.formularioService.getAll();
    }

    @Get('')
    async getById(@Query('id') id: number) {
        return await this.formularioService.getById(id);
    }

    @Post()
    async save(@Body() formulario: Formulario) {
        return await this.formularioService.save(formulario);
    }

    @Patch('/update')
    async update(@Query('id') id: number, @Body() formulario: any) {
        return await this.formularioService.update(id, formulario);
    }

    // Métodos para obtener formularios ordenados
    @Get("/ordenados")
    async getOrdered(@Query('por') por: string): Promise<Formulario[]> {
        switch (por) {
            case 'prioridad':
                return this.formularioService.getAllOrdered('prioridad');
            case 'fecha':
                return this.formularioService.getAllOrdered('fecha_solicitud');
            case 'estado':
                return this.formularioService.getAllOrdered('estado');
            default:
                return this.formularioService.getAll();
        }
    }
    @Delete()
    async eliminar(@Query('id') id:number){
        return await this.formularioService.delete(id);
    }

    // TODO:
    // traer ordenado por:
    // por prioridad
    // http://localhost:3000/formulario/ordenados?por=prioridad

    // por fecha
    // por estado

    // Get va con PathVariable
    // Put o Patch va con PathVariable y request body
    // Delete va con PathVariable

}



