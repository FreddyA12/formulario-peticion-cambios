import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { Formulario } from './formulario.entity';
import { FormularioDTO } from './formulario.dto';

@Controller('formulario')
export class FormularioController {
    constructor(private formularioService: FormularioService) { }

    @Get()
    async getAll(): Promise<FormularioDTO[]> {
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

    @Delete('/:id')
    async eliminar(@Param('id') id: number) {
        return await this.formularioService.delete(id);
    }
}



