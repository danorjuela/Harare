import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity({ schema: 'public', name: 'tickets' })
export class TicketEntity extends BaseEntity {
  @Column('int', {
    generated: true,
    nullable: false,
    primary: true,
  })
  Id: number;

  @Column({ type: 'date' })
  DepartureDate: Date;

  @Column({ type: 'date' })
  ArrivalDate: Date;

  @Column({ type: 'varchar', length: '3' })
  DepartureCity: string;

  @Column({ type: 'varchar', length: '3' })
  ArrivalCity: string;

  @Column({ type: 'varchar', length: '255' })
  PassagerName: string;

  @Column({ type: 'bool' })
  HaveHoldLuggage: boolean;

  @Column({ type: 'double precision' })
  Price: number;

  @Column({ type: 'time' })
  DepartureHour: string;

  @Column({ type: 'time' })
  ArrivalHour: string;
}
