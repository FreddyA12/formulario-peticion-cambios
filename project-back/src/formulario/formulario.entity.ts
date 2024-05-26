import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'formularios' })
export class Formulario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 , nullable: false})
  nombre_proyecto: string;

  @Column({ type: 'date', nullable: false })
  fecha_solicitud: Date;

  @Column({ type: 'varchar', length: 10 , nullable: false})
  prioridad: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre_cambio: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre_solicitante: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  repositorio: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  categoria_cambio: string;

  @Column({ type: 'varchar', length: 255 , nullable: false})
  causa_cambio: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descripcion_cambio: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  razon_cambio: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  impacto_cambio: string;

  @Column({ type: 'varchar', length: 255 , nullable: false})
  justificacion_cambio: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  duracion: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  evaluaciones: string;

  @Column({ type: 'varchar', length: 255 , nullable: false})
  implicacion_recursos: string;

  @Column({ type: 'varchar', length: 255 })
  recomendaciones: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  comentarios: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_aprobante: string;

  @Column({ type: 'date' })
  fecha_aprobacion: Date;

  @Column({ type: 'varchar', length: 10, nullable: false })
  estado: string;
}
