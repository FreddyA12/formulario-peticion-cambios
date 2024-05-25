import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'formularios' })
export class Formulario {
  @PrimaryGeneratedColumn()
  numero_de_solicitud: number;

  @Column({ type: 'date' })
  fecha_solicitud: Date;

  @Column({ type: 'varchar', length: 10 })
  prioridad: string;

  @Column({ type: 'varchar', length: 255 })
  nombre_cambio: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_solicitante: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  repositorio: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  issue: string;

  @Column({ type: 'varchar', length: 100 })
  categoria_del_cambio: string;

  @Column({ type: 'varchar', length: 255 })
  causa_cambio: string;

  @Column({ type: 'varchar', length: 255 })
  descripcion_cambio: string;

  @Column({ type: 'varchar', length: 255 })
  razon_cambio: string;

  @Column({ type: 'varchar', length: 255 })
  impacto_cambio: string;

  @Column({ type: 'varchar', length: 255 })
  justificacion_cambio: string;

  @Column({ type: 'varchar', length: 100 })
  duracion: string;

  @Column({ type: 'varchar', length: 255 })
  evaluaciones: string;

  @Column({ type: 'varchar', length: 255 })
  implicaciones_de_recursos: string;

  @Column({ type: 'varchar', length: 255 })
  recomendaciones: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  comentarios: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_del_aprobante: string;

  @Column({ type: 'date' })
  fecha_de_aprobacion: Date;

  @Column({ type: 'varchar', length: 10 })
  estado: string;
}
