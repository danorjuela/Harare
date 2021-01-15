import { Entity, Column, OneToMany, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'air_tickets' })
export class AirTicket {

    @PrimaryColumn({ type: 'int' })
    Id: number;

    @Column({ type: 'date' })
    DepartureDate: Date;

    @Column({ type: 'date' })
    ArrivalDate: Date;

    @Column({ type: 'varchar', length: '3' })
    DepartureCity: Date;

    @Column({ type: 'varchar', length: '3'})
    ArrivalCity: Date;

    @Column({ type: 'varchar', length: '255' })
    PassagerName: string

    @Column({ type: 'bool' })
    HaveHoldLuggage: Boolean

    @Column({ type: 'double precision'})
    Price: number;

    @Column({ type: 'time' })
    DepartureHour: Date;

    @Column({ type: 'time' })
    ArrivalHour: Date;

}