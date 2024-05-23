import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { Formulario } from './formulario.entity';

@Controller('formulario')
export class FormularioController {
    constructor(private formularioService: FormularioService) { }

    @Get()
    async getAll(): Promise<Formulario[]> {
        return await this.formularioService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number) {
        return await this.formularioService.getById(id);
    }

    @Post()
    async save(@Body() formulario: Formulario) {
        return await this.formularioService.save(formulario);
    }

    @Patch('/update/:id')
    async update(@Param('id') id: number, @Body() formulario: any) {
        return await this.formularioService.update(id, formulario);
    }

    // Métodos para obtener formularios ordenados
    @Get("/ordenados/:por")
    async getOrdered(@Param('por') por: string): Promise<Formulario[]> {
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



