import { Module } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './formulario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Formulario])],
  providers: [FormularioService],
  controllers: [FormularioController],
  exports: [FormularioService]
})
export class FormularioModule {}
