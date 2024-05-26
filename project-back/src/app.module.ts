import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormularioModule } from './formulario/formulario.module';
import { Formulario } from './formulario/formulario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.174.88.52',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'formularios-cambio',
      entities: [Formulario],
    }),
    FormularioModule,
    
  ],
})
export class AppModule {}
